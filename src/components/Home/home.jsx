import React, { useState } from 'react'
import './home.css'
import { WebcamCapture} from '../WebCam/webCam'
import Component from '../PhoneCam/phoneCam'



const Home = () => {


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Capture !
                    </h1>
                    <form className="form">
                        {/* <WebcamCapture/>  */}
                        <Component />
                    </form>
                </div>
            </div>
        </div>
    )

   
}
export default Home