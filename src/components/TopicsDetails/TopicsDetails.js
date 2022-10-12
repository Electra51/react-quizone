import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faEye } from '@fortawesome/free-solid-svg-icons'
// import Question from './Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questionone from '../Questionone';
import Questiontwo from '../Questiontwo';
import Questionthree from '../Questionthree';
import Questionseven from '../Questionseven';
import Questionfour from '../Questionfour';
import Questionfive from '../Questionfive';
import Questionsix from '../Questionsix';
import Questioneight from '../Questioneight';
import Questionnine from '../Questionnine';
import Questionten from '../Questionten';
import Questioneleven from '../Questioneleven';

const TopicsDetails = () => {
    
   
    
     
    const loaderData= useLoaderData()
    const quiz = loaderData.data
    console.log(quiz.questions[1].correctAnswer

        );
    // const quiz = useLoaderData();
    // console.log(quiz);
    const {total,name,
    } = quiz;
    
   

    return (
        <div>
            
            <h3 className='p-5 my-8 font-sans text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>Quiz topics: {name} ({total})</h3>
            
            
           {total===8 ? <div> <Questionone></Questionone>
            <Questiontwo></Questiontwo>
            <Questionthree></Questionthree>
            <Questionfour></Questionfour>
            <Questionfive></Questionfive>
            <Questionsix></Questionsix>
            <Questionseven></Questionseven>
            <Questioneight></Questioneight>
                    
            </div>
                : total===9 ? <div>
                <Questionone></Questionone>
            <Questiontwo></Questiontwo>
            <Questionthree></Questionthree>
            <Questionfour></Questionfour>
            <Questionfive></Questionfive>
            <Questionsix></Questionsix>
            <Questionseven></Questionseven>
                    <Questioneight></Questioneight>
                    <Questionnine></Questionnine>
                    
                </div> :
                    <div>
                        <Questionone></Questionone>
            <Questiontwo></Questiontwo>
            <Questionthree></Questionthree>
            <Questionfour></Questionfour>
            <Questionfive></Questionfive>
            <Questionsix></Questionsix>
            <Questionseven></Questionseven>
                    <Questioneight></Questioneight>
                    <Questionnine></Questionnine>
                    <Questionten></Questionten>
                    <Questioneleven></Questioneleven>
                    </div>}
            
            
        
<ToastContainer></ToastContainer>
        </div>
       
    );
    
};


export default TopicsDetails;