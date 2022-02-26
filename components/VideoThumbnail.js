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






function VideoThumbnail({ details }) {

    const video = details;

    const key=details.hrefArray.substring(details.hrefArray.indexOf('video/')+6,details.hrefArray.length)
    const video_id=key.substring(0,key.indexOf('/'))


    const [ImageSrc] = useState(video.thumbnail);



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



    



    return (
        <div className="hover:z-50 ">
            <Head>
                <title>My page title</title>
                <meta name="referrer" content="no-referrer" />
            </Head>

            <a href={`/video/${video_id}*${video.TitleArray}`} onClick={OnClickHandler}  data-title={video.TitleArray} >
                <div className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer  shadow-md  border-2 rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-white  `}>

                    <div className={`relative`}
                    >
                        <img
                            loading="lazy"
                            src={video.thumbnail}
                            height={360}
                            width={480}
                        ></img>
                    </div>

                    <p className=" font-semibold text-sm sm:text-lg  pl-1 pt-1  whitespace-nowrap overflow-hidden  ">{video.TitleArray}</p>


                    <div className="flex justify-between scale-90 sm:scale-100 sm:justify-around lg:space-x-4 lg:justify-start
        overflow-hidden">

                        <div className="flex justify-center items-center ">
                            <ClockIcon className="icon text-red-500" />
                            <p>{video.durationArray}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <StarIcon className="icon text-yellow-400" />
                            <p>8796</p>
                        </div>

                        <div className="flex justify-center items-center ">
                            <ThumbUpIcon className="icon text-green-500" />
                            <p>{video.liked}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <ThumbDownIcon className="icon text-red-500" />
                            <p>{video.disliked}</p>
                        </div>

                    </div>

                </div>

            </a>
            {/* </Link> */}



        </div >
    )
}

export default VideoThumbnail
