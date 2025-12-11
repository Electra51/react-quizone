// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";

// const Footer = () => {
//   return (
//     <footer className="px-2 divide-y  text-gray-800 bg-gradient-to-r from-cyan-50  to-blue-600 ">
//       <div className="container flex flex-col items-center content-center py-5 mx-auto space-y-8 lg:flex-row lg:space-y-0">
//         <div className="lg:w-1/4">
//           <Link
//             to={"/home"}
//             aria-label="QuiZone"
//             title="QuiZone"
//             className="inline-flex items-center">
//             <img src={logo} alt="" />
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 items-center text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about">Features</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/about">Pricing</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <h3 className="tracking-wide uppercase text-gray-50">SERVICES</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about">Privacy</Link>
//               </li>
//               <li>
//                 <Link to="/about">Terms of Service</Link>
//               </li>
//               <li>
//                 <Link to="/about">FAQ</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <h3 className="uppercase text-gray-50">Developers</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about">Public API</Link>
//               </li>
//               <li>
//                 <Link to="/about">Documentation</Link>
//               </li>
//               <li>
//                 <Link to="/about">Guides</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <div className="flex justify-center content-center items-center space-x-2">
//               <Link
//                 to="/about"
//                 title="Facebook"
//                 className="flex items-center p-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 32 32"
//                   className="w-5 h-5 fill-current">
//                   <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
//                 </svg>
//               </Link>
//               <Link
//                 to="/about"
//                 title="Twitter"
//                 className="flex items-center p-1">
//                 <svg
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 fill-current">
//                   <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
//                 </svg>
//               </Link>
//               <Link
//                 to="/about"
//                 title="Instagram"
//                 className="flex items-center p-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 32 32"
//                   fill="currentColor"
//                   className="w-5 h-5 fill-current">
//                   <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-3 text-sm text-center text-gray-300">
//         Copyright@2022QuiZone | All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/about" },
      { name: "About Us", path: "/about" },
      { name: "Pricing", path: "/about" },
      { name: "Testimonials", path: "/about" },
    ],
    services: [
      { name: "Privacy Policy", path: "/about" },
      { name: "Terms of Service", path: "/about" },
      { name: "FAQ", path: "/about" },
      { name: "Support", path: "/about" },
    ],
    developers: [
      { name: "Public API", path: "/about" },
      { name: "Documentation", path: "/about" },
      { name: "Guides", path: "/about" },
      { name: "API Status", path: "/about" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      path: "https://facebook.com",
      color: "hover:text-blue-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      path: "https://twitter.com",
      color: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      path: "https://instagram.com",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-300 via-purple-400 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center group mb-4"
              aria-label="QuizZone">
              <img
                src={logo}
                alt="QuizZone Logo"
                className="h-12 w-auto transform group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-white dark:text-gray-300 mb-6 leading-relaxed">
              Test your knowledge on a variety of fun and interesting topics.
              Join thousands of learners improving their skills every day.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white dark:text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@quizzone.com</span>
              </div>
              <div className="flex items-center gap-2 text-white dark:text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-2 text-white dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">PRODUCT</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors inline-flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">SERVICES</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors inline-flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">DEVELOPERS</h3>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors inline-flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400/30 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-white dark:text-gray-400 text-sm text-center md:text-left">
            © {currentYear} QuizZone. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-white dark:text-gray-400 text-sm mr-2">
              Follow us:
            </span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/10 dark:bg-gray-800 rounded-full transition-all hover:bg-white/20 dark:hover:bg-gray-700 hover:scale-110 ${social.color}`}
                  aria-label={social.name}>
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Back to Top Button (Optional) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800 hover:bg-white/20 dark:hover:bg-gray-700 rounded-lg transition-all group">
            <span className="text-sm text-white dark:text-gray-300">
              Back to Top
            </span>
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Wave Effect (Optional decorative element) */}
      <div className="relative h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"></div>
    </footer>
  );
};

export default Footer;
