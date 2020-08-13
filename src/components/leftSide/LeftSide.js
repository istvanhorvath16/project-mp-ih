import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';
//import call from 'react-native-phone-call';
 



const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Welcome to</p>
                    <h1 className="o-font-lg ml-2 o-text-purple">Horvath Istvan</h1>
                    <p className="o-font-lg text-white mb-1 mb-sm-3">'s Virtual Portofolio</p>
                </div>
                <p className="text-center text-white">Currently a Quality Assurance Tester aspiring to be a full-stack developer, with most of the actual skills focused more on the front-end side, but the evolution is still in progress. Feel free to look around and get in touch for the submission of inquiries.</p>
                <SocialList margin />
                <div className="row mb-5 justify-content-center">
                    <a href="/public/Horvath_Istvan_CV_2020.pdf" className="d-block m-3 text-white o-btn text-center py-2 position-relative" download>DOWNLOAD CV</a>
                    
                    <a href="/" className="d-block m-3 text-white o-btn text-center py-2 position-relative" /*onClick={ call( {number: '+40747903797', prompt: false} ).catch(console.error) } */ >CONTACT ME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;