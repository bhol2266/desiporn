import Head from 'next/head';
import { useEffect, useState } from 'react';
import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import { useRouter } from "next/router";
import fetchdata from 'node-fetch';
import {
    ThumbUpIcon, ClockIcon, FilmIcon, EyeIcon, PlusIcon, MinusIcon
} from '@heroicons/react/solid';




function Videoplayer({ videolink_qualities_screenshots }) {

  

    const [video_details, setvideo_details] = useState({});

    useEffect(() => {
        setvideo_details(JSON.parse(localStorage.getItem('videoplayer')))
    }, [])


    const [screenshotlayoutToggle, setscreenshotlayoutToggle] = useState('hidden')
    const [PlusVisible, setPlusVisible] = useState('flex')
    const [MinusVisible, setMinusVisible] = useState('hidden')



    const openScreenShotLayout = () => {
        if (screenshotlayoutToggle === 'flex') {
            setscreenshotlayoutToggle('hidden')
            setPlusVisible('flex')
            setMinusVisible('hidden')
        } else {

            setscreenshotlayoutToggle('flex')
            setPlusVisible('hidden')
            setMinusVisible('flex')
        }
    }





    return (
        <>

            <Head>
                <title>{video_details.Title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>


            {video_details.Title && <div>
                <p className='text-2xl pl-2 '></p>


                <div className='flex space-x-2 sm:space-x-6'>

                    <div className='flex items-center'>
                        <ClockIcon className='icon hover:scale-100' />
                        <p className='text-xs font-bold'>{video_details.duration}</p>
                    </div>
                    <div className='flex items-center'>
                        <FilmIcon className='icon hover:scale-100' />
                        {videolink_qualities_screenshots.video_qualities_available.map(quality => {
                            return (
                                <p key={quality} className='text-xs font-bold pr-1'>{quality}</p>

                            )
                        })}
                    </div>

                </div>

                {/* Tags */}
                <div className='p-1 flex flex-wrap'>
                    {
                        videolink_qualities_screenshots.tagsArray.map(key => {
                            if (key.length >= 1) {

                                return (
                                    <a key={key} href={`/search/${key.trim()}`}>
                                        <p className='pl-1 pr-1 text-xs md:text-sm ml-1 mt-1 cursor-pointer hover:bg-gray-300 rounded bg-yellow-100 border-gray-400 border-2'>{key}</p>
                                    </a>
                                )
                            }
                        })
                    }
                </div>




                <div className='p-1 border-2 border-gray-200 rounded overflow-hidden cursor-pointer md:w-4/5'>

                    <div className=' hover:brightness-75 group  relative'>


                        <video poster={video_details.thumbnail} className={`animate-fade `} width="1280" height="720" controls >
                            <source src={videolink_qualities_screenshots.video_qualities_available_withURL[videolink_qualities_screenshots.video_qualities_available_withURL.length-1]} type="video/mp4" />

                        </video>

                    </div>
                    <div className="flex justify-start space-x-10">

                        <div className="flex justify-center items-center space-x-1 ">

                            <div className='flex items-center'>
                                <EyeIcon className="icon text-black-400" />
                                <p className='text-xs font-bold'>{video_details.views.length > 1 ? video_details.views : "46513"}</p>
                            </div>
                            <div className='flex items-center'>
                                <ThumbUpIcon className="icon text-red-400" />
                                <p className='text-xs font-bold'>{video_details.likedPercent}</p>
                            </div>

                        </div>

                    </div>


                    {/* ScreenShots  */}

                    <div onClick={openScreenShotLayout} className='flex  justify-between p-1 hover:bg-gray-300 bg-gray-200 rounded border-2 border-gray-300 m-1 md:w-fit md:space-x-4'>

                        <p className='text-black font-bold text-2xl text-center '>Screenshots</p>
                        <PlusIcon className={`icon hover:scale-100 ${PlusVisible}`} />
                        <MinusIcon className={`icon hover:scale-100 ${MinusVisible}`} />

                    </div>
                    <div className={`flex-wrap items-center justify-center md:justify-start ${screenshotlayoutToggle} `}>
                        {videolink_qualities_screenshots.screenshotsArray.map(shot => {
                            return (
                                <div className='pr-1' key={shot}>
                                    <img
                                        className='rounded'
                                        alt='loading'
                                        src={shot}
                                        layout='fixed'
                                        height={108}
                                        width={192}
                                    ></img>
                                </div>
                            )
                        })}

                    </div>


                </div>






                {/* <div className='flex p-1 flex-col  items-center md:flex-row sm:justify-items-start'>
                    <p className='font-bold text-red-500 text-xl'>Videos related to</p>
                    <p className='font-bold pl-1'>{video_details.title}</p>
                </div>
                {videolinkState &&
                    <Videos data={relatedVideos} />
                } */}




            </div>
            }



            {/* <Outstreams />
            <RecommendedAds /> */}


        </>

    )
}





export default Videoplayer


export async function getServerSideProps(context) {


    const { video } = context.query;
    const keyy = video.substring(video.indexOf("video/"), video.indexOf("*"))
    const title = video.substring(video.indexOf("*") + 1, video.length).trim();


    var finalDataArray = {}

    const scrape2 = async (url) => {


        var video_link = ''
        var video_qualities_available_withURL = []
        var screenshotsArray = []
        var video_qualities_available = []


        var tagsArray = []
        var categoriesArray = []
        var pornstar = ''


        const response = await fetchdata(url)
        const body = await response.text();
        const $ = cheerio.load(body)


        $('video source').each((i, el) => {

            const data = $(el).attr("src")
            video_link = data
        })


        const cut1 = body.substring(body.indexOf('<main id="container">'), body.indexOf(`<main id="container">`) + 1000);
        const cut2 = cut1.substring(cut1.indexOf('var stream_data'), body.indexOf("mpd"));
        const video_qualities_url_array = extractUrls(cut2)

        var preloaded_video_quality = ''
        if (video_link.includes("240p.mp4")) {
            preloaded_video_quality = "240p"

        }
        if (video_link.includes("320p.mp4")) {
            preloaded_video_quality = "320p"

        }
        if (video_link.includes("480p.mp4")) {
            preloaded_video_quality = "480p"

        }
        if (video_link.includes("720p.mp4")) {
            preloaded_video_quality = "720p"

        }
        if (video_link.includes("1080p.mp4")) {
            preloaded_video_quality = "1080p"

        }
        if (video_link.includes("4k.mp4")) {
            preloaded_video_quality = "4k"

        }

        //Extract available video qualities
        for (let index = 0; index < video_qualities_url_array.length; index++) {
            if (video_qualities_url_array[index].includes("vdownload")) {

                if (video_qualities_url_array[index].includes("240p.mp4")) {
                    video_qualities_available.push("240p")
                }
                if (video_qualities_url_array[index].includes("320p.mp4")) {
                    video_qualities_available.push("320p")
                }
                if (video_qualities_url_array[index].includes("480p.mp4")) {
                    video_qualities_available.push("480p")

                }
                if (video_qualities_url_array[index].includes("720p.mp4")
                ) {
                    video_qualities_available.push("720p")

                }
                if (video_qualities_url_array[index].includes("1080p.mp4")) {
                    video_qualities_available.push("1080p")

                }
                if (video_qualities_url_array[index].includes("4k.mp4")) {
                    video_qualities_available.push("4k")

                }
            }

        }

        for (let index = 0; index < video_qualities_available.length; index++) {
            video_qualities_available_withURL.push(video_link.replace(preloaded_video_quality, video_qualities_available[index]))
        }


        $('.timeline div span img').each((i, el) => {

            const data = $(el).attr("data-src")
            screenshotsArray.push(data)
        })


        $('.cat .ent a').each((i, el) => {

            const data = $(el).text()
            tagsArray.push(data)
        })








        finalDataArray = {
            video_link: video_link,
            video_qualities_available: video_qualities_available,
            video_qualities_available_withURL: video_qualities_available_withURL,
            screenshotsArray: screenshotsArray,
            tagsArray: tagsArray,
        }

    }


    await scrape2(`https://spankbang.com/${keyy}/video/${title}`)




    return {
        props: {
            videolink_qualities_screenshots: finalDataArray
        }
    }


}






