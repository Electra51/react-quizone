import React from 'react';
import { LineChart, Line, XAxis, YAxis,  Tooltip,  ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        { "id": 1, "name": "React", "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png", "total": 8 },
        { "id": 2, "name": "JavaScript", "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png", "total": 9 },
        { "id": 4, "name": "CSS", "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png", "total": 8 },
        { "id": 5, "name": "Git", "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png", "total": 11 }]
       
   
    return (
        
        <div className=''>
            <h2 className='p-5 my-8 font-sans text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>This is LineChart of total quiz per subject</h2>
            <div>
            <ResponsiveContainer width='50%' height={500} aspect={1.7}>
        <LineChart
           
          width={300}
          height={500}
          data={data}>
          <Line type="monotone" dataKey="total" />
        
          
          <XAxis dataKey="name" fill="#8884d8" /> 
          <YAxis />
          <Tooltip />
          
          
                </LineChart>
                
            </ResponsiveContainer>
            </div>
        </div>
      
    );
  }


export default Statistics;