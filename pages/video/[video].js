import Head from 'next/head';
import { useEffect, useState } from 'react';
import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import { useRouter } from "next/router";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Videos from '../../components/Videos'
import fetchdata from 'node-fetch';
import {
    ThumbUpIcon, ClockIcon, FilmIcon, EyeIcon, PlusIcon, MinusIcon, CogIcon
} from '@heroicons/react/solid';
import { useRef } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Videoplayer({ videolink_qualities_screenshots, preloaded_video_quality, relatedVideos, pornstar }) {

    let uniquePornstars = pornstar.filter((element, index) => {
        return pornstar.indexOf(element) === index;
    });




    const videoPlayerRef = useRef(null)

    useEffect(() => {
        setvideo_details(JSON.parse(localStorage.getItem('videoplayer')))

        console.log(JSON.parse(localStorage.getItem('videoplayer')));
    }, [])


    const [video_details, setvideo_details] = useState({});
    const [screenshotlayoutToggle, setscreenshotlayoutToggle] = useState('hidden')
    const [PlusVisible, setPlusVisible] = useState('flex')
    const [MinusVisible, setMinusVisible] = useState('hidden')
    const [Quality, setQuality] = useState(preloaded_video_quality)
    const [VideoSrc, setVideoSrc] = useState(videolink_qualities_screenshots.video_link)


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

    //Quality Changer Onclick
    const menuItemOnClick = (quality) => {
        if (quality != Quality) {

            const currentTime = videoPlayerRef.current.currentTime;
            setQuality(quality);
            const index = videolink_qualities_screenshots.video_qualities_available.indexOf(quality)
            videoPlayerRef.current.load()
            videoPlayerRef.current.currentTime = currentTime
            videoPlayerRef.current.play();
            setVideoSrc(videolink_qualities_screenshots.video_qualities_available_withURL[index])
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




                <p className='text-md sm:text-lg font-bold p-1 px-2 text-wrap text-gray-700 md:text-2xl'>{video_details.Title}</p>


                <div className='p-1 border-2 border-gray-200 rounded overflow-hidden sm:cursor-pointer md:w-4/5'>

                    <div className=' hover:brightness-75 group  relative'>


                        <video ref={videoPlayerRef} poster={video_details.thumbnail} autoPlay className={`animate-fade `} width="1280" height="720" controls >
                            <source src={VideoSrc} type="video/mp4" />

                        </video>

                    </div>

                    <div className="flex justify-between p-2  lg:pr-28 ">

                        <div className="flex justify-around items-center space-x-2 ">

                            <div className='flex items-center'>
                                <EyeIcon className="icon text-black-400" />
                                <p className='text-xs font-bold'>{video_details.views.length > 1 ? video_details.views : "46513"}</p>
                            </div>
                            <div className='flex items-center'>
                                <ThumbUpIcon className="icon text-green-500" />
                                <p className='text-xs font-bold'>{video_details.likedPercent}</p>
                            </div>



                        </div>
                        <div>
                            <Menu as="div" className="relative  text-left">
                                <div className=' w-fit'>
                                    <Menu.Button className="flex items-center space-x-1">
                                        <CogIcon className="icon text-gray-600" />
                                        <p className='text-sm font-bold'>{Quality}</p>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="z-50 origin-top-right absolute right-0 bottom-11 mt-2 w-fit rounded-md shadow-lg bg-transparent bg-white bg-opacity-75  ">
                                        <div className=" border-2 border-gray-400 rounded">

                                            {videolink_qualities_screenshots.video_qualities_available.map(quality => {
                                                return (
                                                    <Menu.Item key={quality} onClick={() => { menuItemOnClick(quality) }}>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? ' text-red-500' : 'text-black',
                                                                    'block px-4 py-2 text-sm font-semibold hover:bg-gray-300'
                                                                )}
                                                            >
                                                                {quality}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                )
                                            })}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>


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

                    {uniquePornstars.length>=1 && <div className='flex items-center py-2'>
                        <span className='font-semibold text-lg'>Pornstar:</span>
                        {uniquePornstars.map(pornstars => {
                            return (

                                <a key={pornstars}>
                                    <p className='pl-1 pr-1 text-xs md:text-sm ml-1 mt-1 cursor-pointer hover:bg-green-300 rounded bg-green-100 border-gray-400 border-2'>
                                        {pornstars}
                                    </p>
                                </a>


                            )
                        })}
                    </div>
                    }



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






                <div className='flex p-1 flex-col  items-center md:flex-row sm:justify-items-start'>
                    <p className='font-bold text-red-500 text-lg'>Videos related to</p>
                    <p className='font-bold text-lg pl-1'>{video_details.Title}</p>
                </div>
                <Videos data={relatedVideos} />
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
    var preloaded_video_quality = ''
    var relatedVideos = []
    var pornstar = []



    const scrape = async (body) => {

        var thumbnailArray = []
        var TitleArray = []
        var durationArray = []
        var likedPercentArray = []
        var viewsArray = []
        var previewVideoArray = []
        var hrefArray = []

        const $ = cheerio.load(body)



        $('.video-list.video-rotate .video-item picture img').each((i, el) => {

            const data = $(el).attr("data-src")
            thumbnailArray.push(data)


        })
        $('.video-list.video-rotate .video-item picture img').each((i, el) => {

            const data = $(el).attr("alt")
            TitleArray.push(data)


        })
        $('.video-list.video-rotate .video-item .l').each((i, el) => {

            const data = $(el).text()
            durationArray.push(data)
        })



        $('.video-list.video-rotate .video-item .stats').each((i, el) => {

            const views = $(el).children().eq(1).text()

            const likedPercent = $(el).children().eq(2).text()
            if (views.includes('%')) {
                likedPercentArray.push(views)
                viewsArray.push(likedPercent)

            } else {
                viewsArray.push(views)
                likedPercentArray.push(likedPercent)
            }
        })


        $('.video-list.video-rotate .video-item picture img').each((i, el) => {

            const data = $(el).attr("data-preview")
            previewVideoArray.push(data)
        })



        $('.video-list.video-rotate .video-item').each((i, el) => {

            const data = $(el).children().eq(1).attr("href")
            if (data) {
                hrefArray.push(`https://spankbang.com${data}`)
            }


        })



        for (let index = 0; index < thumbnailArray.length; index++) {

            if (hrefArray[index] != undefined && previewVideoArray[index] != undefined && !thumbnailArray[index].includes("//assets.sb-cd.com")) {

                relatedVideos.push({
                    thumbnailArray: thumbnailArray[index],
                    TitleArray: TitleArray[index],
                    durationArray: durationArray[index],
                    likedPercentArray: likedPercentArray[index],
                    viewsArray: viewsArray[index],
                    previewVideoArray: previewVideoArray[index],
                    hrefArray: hrefArray[index],

                })
            }
        }
        console.log(relatedVideos.length);


    }



    const scrape2 = async (url) => {


        var video_link = ''
        var video_qualities_available_withURL = []
        var screenshotsArray = []
        var video_qualities_available = []


        var tagsArray = []
        var categoriesArray = []


        const response = await fetchdata(url)
        const body = await response.text();
        const $ = cheerio.load(body)




        await scrape(body)


        $('video source').each((i, el) => {

            const data = $(el).attr("src")
            video_link = data
        })


        const cut1 = body.substring(body.indexOf('<main id="container">'), body.indexOf(`<main id="container">`) + 1000);
        const cut2 = cut1.substring(cut1.indexOf('var stream_data'), body.indexOf("mpd"));
        const video_qualities_url_array = extractUrls(cut2)

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
        $('.cat .ent a').each((i, el) => {
            if ($(el).attr('href').includes('/pornstar/')) {
                const data = $(el).text()
                pornstar.push(data)
            }

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
            videolink_qualities_screenshots: finalDataArray,
            preloaded_video_quality: preloaded_video_quality,
            relatedVideos: relatedVideos,
            pornstar: pornstar
        }
    }


}






