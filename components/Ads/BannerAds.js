import { Banner } from "exoclick-react";
import { useContext } from 'react';
import videosContext from '../../context/videos/videosContext';


function BannerAds() {


    const context = useContext(videosContext);
    const { disclaimerShow, setdisclaimerShow } = context;
    return (

        <div className={`w-full flex items-center justify-center ${disclaimerShow ? "blur" : ""}`}>

            {/* Mobile  */}

            <div className='md:hidden'>
                <Banner zoneId={4580186} />
            </div>


            {/* Web  */}

            <div className='hidden md:flex'>
                <Banner zoneId={4580008} />
            </div>


        </div>
    )
}

export default BannerAds;
