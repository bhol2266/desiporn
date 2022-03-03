import VideoThumbnail from "./VideoThumbnail"
import { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import BannerAds from "./Ads/BannerAds";
import { useContext, useEffect } from 'react'
import videosContext from '../context/videos/videosContext'



function Videos({ data }) {



    return (

        <div className='grid grid-cols-1 p-1 sm:pl-4 sm:pr-4 sm:grid-cols-2 gap-x-1  md:grid-cols-3 lg:grid-cols-4'
        >
            {
                data.map(video => {
                    return (
                        <VideoThumbnail key={video.thumbnailArray} details={video} />
                    )
                })
            }

        </div>
    )
}

export default Videos
