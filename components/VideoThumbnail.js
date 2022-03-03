import {
    ClockIcon,
    ThumbUpIcon,
    ThumbDownIcon,
} from '@heroicons/react/outline';
import {
    EyeIcon, StarIcon
} from '@heroicons/react/solid';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Head from 'next/head'
import Link from 'next/link';
import HoverVideoPlayer from 'react-hover-video-player';







function VideoThumbnail({ details }) {

    var canPlay = 0;

    const video = details;

    const key = details.hrefArray.substring(details.hrefArray.indexOf('video/') + 6, details.hrefArray.length)
    const video_id = key.substring(0, key.indexOf('/'))


    const [ImageSrc] = useState(video.thumbnail);

    // state for making thumbnail hide and preview video play
    const [onHover, setonHover] = useState(false);

    const [spinnerloader, setspinnerloader] = useState(false);


    // thumbnailArray: video.thumbnailArray,
    // TitleArray: video.TitleArray,
    // durationArray: video.durationArray,
    // likedPercentArray: video.likedPercentArray,
    // viewsArray: video.viewsArray,
    // previewVideoArray: video.previewVideoArray,


    const OnClickHandler = () => {
        const object = {
            TitleArray: video.TitleArray,
            link: video.link,
            duration: video.duration,
            liked: video.liked,
            disliked: video.disliked,
            thumbnail: video.thumbnail,

        }

        localStorage.setItem('videoplayer', JSON.stringify(object));
    }



    const stopMovie = (e) => {
        e.target.load();
        setspinnerloader(false)

    }

    const playMovie = (e) => {
        e.target.play();
        setspinnerloader(true)


    }





    return (
        <div className="hover:z-50 ">
            <Head>
                <title>{video.TitleArray}</title>
            </Head>

            <a href={video.hrefArray} onClick={OnClickHandler} data-title={video.TitleArray} >
                <div className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer  shadow-md  border-2 rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-white  `}>



                    <video
                        className={`w-full aspect-video object-contain ${spinnerloader? "":""}`}
                        onMouseOver={playMovie}
                        onMouseLeave={stopMovie}
                        src={video.previewVideoArray}
                        poster={video.thumbnailArray}
                        preload='none'
                        muted="muted"
                    />



                    <p className=" font-semibold text-sm sm:text-md  pl-1 pt-1  whitespace-nowrap overflow-hidden  ">{video.TitleArray}</p>


                    <div className="flex justify-between  sm:scale-90 sm:justify-around lg:space-x-4 lg:justify-start
                        overflow-hidden">

                        <div className="flex justify-center items-center ">
                            <ClockIcon className="icon text-red-500" />
                            <p>{video.durationArray}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <EyeIcon className="icon text-yellow-400" />
                            <p>{video.viewsArray}</p>
                        </div>

                        <div className="flex justify-center items-center ">
                            <ThumbUpIcon className="icon text-green-500" />
                            <p>{video.likedPercentArray}</p>
                        </div>


                    </div>

                </div>

            </a>
            {/* </Link> */}



        </div >
    )
}

export default VideoThumbnail
