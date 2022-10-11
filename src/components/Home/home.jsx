import React, { useState } from 'react'
import './home.css'
import { WebcamCapture} from '../WebCam/webCam'


const Home = () => {


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <form className="form">
                        <WebcamCapture/> 
                    </form>
                </div>
            </div>
        </div>
    )

   
}
export default Home