import React from 'react';
import Slider from './Slider/Slider';
import Buttons from './Buttons/Buttons';
import ImgCategory from '../ImgCategory/ImgCategory';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Buttons></Buttons>
           <ImgCategory></ImgCategory>
        </div>
    );
};

export default Home;