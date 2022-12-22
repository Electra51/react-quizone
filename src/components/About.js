import React from 'react';
import image1 from '../images/1.PNG';
import image2 from '../images/2.PNG';
import image3 from '../images/3.PNG';
import image4 from '../images/4.PNG';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const About = () => {
    return (
        <PhotoProvider>
                <div className="flex justify-center">
  <div className="flex flex-col lg:flex-row bg-white shadow-lg items-center justify-center my-20">
                
                <div class="overflow-hidden text-gray-700  lg:w-1/2" data-aos="fade-right">
  <div class="container py-2 mx-auto lg:px-10 p-0">
    <div class="flex flex-wrap -m-1 md:-m-2 ">
                                <div class="flex flex-wrap w-1/2">
                                <PhotoView src={image1}>
                                <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image1}/>
        </div>
                                    </PhotoView>
                                    <PhotoView src={image2}>
                                    <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image2}/>
        </div>
      </PhotoView>
       
      <PhotoView src={image3}>
      <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image3}/>
        </div>
      </PhotoView>
     
      </div>
                                <div class="flex flex-wrap w-1/2">
                                <PhotoView src={image4}>
                                <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image4}/>
        </div>
      </PhotoView>
      <PhotoView src={image1}>
      <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image1}/>
        </div>
      </PhotoView>
      <PhotoView src={image2}>
      <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={image2}/>
        </div>
      </PhotoView>
       
      </div>
    </div>
  </div>
</div>
    <div className="w-full lg:w-1/2 pr-10 flex flex-col justify-start" data-aos="fade-left">
      <h5 className="text-gray-900 text-4xl font-bold mb-2 text-left">About Us</h5>
      <p className="text-gray-700 text-base mb-4 text-left">
      This is an online quiz and test system. Users can take a quiz and justify themselves here. Now we provide four types of subjects and a total of 36 quiz question answers. Any one can participate here. In future we provide more subject and quiz question. This is free website for online quiz test system. After completing the quiz, the user is shown the correct answer to each question. We make it free at first. A toast message displays the correct answer to each quiz. Please take the quiz and justify yourself.
                    </p>
                        <p className='text-gray-800 font-bold text-left text-2xl'>Follow us</p>
                        <div className='flex gap-3 text-2xl mb-7 mt-2 text-blue-600'>
                            <BsFacebook></BsFacebook>
                            <BsGithub className='text-black'></BsGithub>
                        <BsLinkedin></BsLinkedin>
                        
                        </div>

      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
    </div>
  </div>
</div>
    </PhotoProvider>
    );
};

export default About;