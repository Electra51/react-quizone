import React  from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';



    
    
const Books = () => {
    // const [quiz,setQuiz]=useState([])
    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/quiz') 
    //         .then(res => res.json())
    //         .then(data => console.log(data))
        
    // },[])
    const loaderData= useLoaderData()
    const booksdata = loaderData.data
    console.log(booksdata);
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
            
                {
                    booksdata.map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                       
                    
                
            </div>
        </div>
    );
};

export default Books;