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






function VideoThumbnail({ details }) {

    const video = details;
    console.log('====================================');
    console.log(video);
    console.log('====================================');

    const [ImageSrc] = useState(video.thumbnail);

    const OnClickHandler = () => {
        const object = {
            id: video.id,
            title: video.title,
            keyword: video.keywords,
            views: video.views,
            rate: video.rate,
            embedurl: video.embed,
            length: video.length_min,
            default_thumb: video.default_thumb.src,
            added: video.added,
            screenshots: video.thumbs.map(thumb => {
                return thumb.src
            })

        }

        localStorage.setItem('videoplayer', JSON.stringify(object));
    }







    return (
        <div className="hover:z-50 ">
            <Head>
                <title>My page title</title>
                <meta name="referrer" content="no-referrer" />
            </Head>



            <a href={`/videoplayer/${video.TitleArray}`} onClick={OnClickHandler} >


                <div className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer  shadow-md  border-2 rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-white  `}>

                    <div className={`relative`}
                    >

                        {/* <img
                            loading="lazy"
                            alt={video.thumbnail}
                            src={video.thumbnail}
                           

                        ></img> */}

                        <img src={video.thumbnail} height={360}
                            width={480} />

{/* 
                        <Image
                            alt={"loading"}
                            src={video.thumbnail}
                            height={360}
                            width={480}
                        />
 */}



                    </div>



                    <div className="flex justify-between scale-90 sm:scale-100 sm:justify-around lg:space-x-4 lg:justify-start
                            overflow-hidden">

                        <div className="flex justify-center items-center ">
                            <ClockIcon className="icon text-red-500" />
                            <p>{video.duration}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <StarIcon className="icon text-yellow-400" />
                            <p>8796</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <EyeIcon className="icon" />
                            <p>{video.views}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <ThumbUpIcon className="icon" />
                            <p>{video.liked}</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <ThumbDownIcon className="icon" />
                            <p>{video.disliked}</p>
                        </div>

                    </div>

                </div>
            </a>

        </div>
    )
}

export default VideoThumbnail
