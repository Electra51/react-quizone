const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

let isRefreshing = false;
let refreshSubscribers: ((error: Error | null) => void)[] = [];

function onRefreshed(error: Error | null) {
  refreshSubscribers.forEach((cb) => cb(error));
  refreshSubscribers = [];
}

function addRefreshSubscriber(cb: (error: Error | null) => void) {
  refreshSubscribers.push(cb);
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_URL}${endpoint}`;
  const fetchOptions = {
    ...options,
    credentials: "include" as RequestCredentials,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  let response: Response;
  try {
    response = await fetch(url, fetchOptions);
  } catch (error) {
    console.error("Fetch Network Error:", error);
    throw new Error("Unable to connect to the server. Please ensure the backend is running.");
  }

  // If 401 Unauthorized, try to refresh tokens
  if (response.status === 401 && endpoint !== "/auth/refresh-tokens" && endpoint !== "/auth/login") {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const refreshResponse = await fetch(`${API_URL}/auth/refresh-tokens`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!refreshResponse.ok) {
          throw new Error("Session expired, please login again");
        }

        onRefreshed(null);
      } catch (error) {
        onRefreshed(error instanceof Error ? error : new Error(String(error)));
        throw error; // Let the caller handle the final error (e.g., AuthContext logging out)
      } finally {
        isRefreshing = false;
      }
    }

    // Wait for the token to be refreshed, then retry the request
    return new Promise((resolve, reject) => {
      addRefreshSubscriber(async (error) => {
        if (error) {
          return reject(error);
        }
        
        try {
          const retryResponse = await fetch(url, fetchOptions);
          const retryData = await retryResponse.json();
          if (!retryResponse.ok) {
            return reject(new Error(retryData.message || "Request failed after refresh"));
          }
          resolve(retryData);
        } catch (retryError) {
          reject(retryError);
        }
      });
    });
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Request failed"
    );
  }

  return data;
}