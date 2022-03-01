import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid';
import cheerio from 'cheerio';
import Head from 'next/head';
import Script from 'next/script';
import fetchdata from 'node-fetch';
import { useEffect, useState } from 'react';
import Videos from '../../components/Videos';
import $ from 'jquery'









function Videoplayer( {  videoid, video_name }) {
    // { video_link, video_details, relatedVideos, videoid, video_name }  //Props

    const [video_details, setvideo_details] = useState({});
    const [videolinkState, setvideolinkState] = useState('');



    useEffect(() => {
        async function getData() {

            const rawResponse = await fetch('/api/webscrap', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ videoid: videoid, video_name: video_name })
            });
            const content = await rawResponse.json();
            setvideolinkState(content.video_link)
            setvideo_details(content.video_details)
            console.log(content.video_details);
            console.log(content.video_link);
        }

        getData()
    }, [])



    return (
        <>

            <Head>
                <title>{video_details.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>



            {videolinkState &&
                <div>
                    <p className='text-2xl pl-2 '>{video_details.title}</p>


                    {/* <div className='flex space-x-2 sm:space-x-6'>

                    <div className='flex items-center'>
                        <ClockIcon className='icon hover:scale-100' />
                        <p className='text-xs font-bold'>{video_details.duration}</p>
                    </div>
                    <div className='flex items-center'>
                        <FilmIcon className='icon hover:scale-100' />
                        <p className='text-xs font-bold'> 480p, 720p, 1080p, 4K</p>
                    </div>

                </div> */}




                    <div className='p-1 border-2 border-gray-200 rounded overflow-hidden cursor-pointer md:w-4/5'>

                        <div className=' hover:brightness-75 group  relative'>


                            <video autoPlay='autoplay' poster={video_details.thumbnail} className={`animate-fade `} width="1280" height="720" controls >
                                <source src={videolinkState} type="video/mp4" />

                            </video>
                        </div>
                        <div className="flex justify-start space-x-10">


                            <div className="flex justify-center items-center ">
                                <ThumbUpIcon className="icon text-red-400" />
                                <p>{video_details.liked}</p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <ThumbDownIcon className="icon text-green-400" />
                                <p>{video_details.disliked}</p>
                            </div>


                        </div>

                    </div>






                    {/* <div className='flex p-1 flex-col  items-center md:flex-row sm:justify-items-start'>
                    <p className='font-bold text-red-500 text-xl'>Videos related to</p>
                    <p className='font-bold pl-1'>{video_details.title}</p>
                </div>
                {videolinkState &&
                    <Videos data={relatedVideos} />
                } */}




                </div>}



            {/* <Outstreams />
            <RecommendedAds /> */}


        </>

    )
}





export default Videoplayer


export async function getServerSideProps(context) {


    const { video } = context.query;
    const videoid = video.substring(0, video.indexOf("*"))
    const video_name = video.substring(video.indexOf("*") + 1, video.length).trim();










    var video_link = ""
    var relatedVideos = []
    var video_details = {}

    const scrape = async (url) => {



        const response = await fetchdata(url)
        const body = await response.text();
        const $ = cheerio.load(body)


        //Video_details
        var liked = ""
        var disliked = ""
        var thumbnail = ""


        $('#ics-lk').each((i, el) => {
            const data = $(el).text();
            liked = data

        })
        $('#ics-dlk').each((i, el) => {
            const data = $(el).text();
            disliked = data

        })
        $('#video-player').each((i, el) => {
            const data = $(el).attr('poster');
            thumbnail = data

        })

        video_details = {
            title: video_name,
            liked: liked,
            disliked: disliked,
            thumbnail: thumbnail,
        }


        //Related Videos 

        var TitleArray = []
        var liked = []
        var disliked = []
        var durationArray = []
        var hrefArray = []
        var thumbnail = []


        $('#video-player source').each((i, el) => {
            const data = $(el).attr('src');
            video_link = data

        })

        $('.info a').each((i, el) => {
            const data = $(el).text().trim();
            TitleArray.push(data)


        })
        $('.info a').each((i, el) => {

            const data = $(el).attr('href')
            hrefArray.push(`https://justindianporn.me${data}`)

        })


        $('.image a img').each((i, el) => {

            const data = $(el).attr('data-src')
            thumbnail.push(data)


        })

        $('.length').each((i, el) => {

            const data = $(el).text().trim();
            durationArray.push(data)

        })
        $('.likes.good').each((i, el) => {

            const data = $(el).text().trim();
            liked.push(data)

        })
        $('.dislikes.bad').each((i, el) => {

            const data = $(el).text().trim();
            disliked.push(data)

        })

        for (let Page = 0; Page < TitleArray.length; Page++) {
            relatedVideos.push({
                TitleArray: TitleArray[Page],
                liked: liked[Page],
                disliked: disliked[Page],
                durationArray: durationArray[Page],
                hrefArray: hrefArray[Page],
                thumbnail: thumbnail[Page],
            })
        }

    }


    await scrape(`https://justindianporn.me/video/${videoid}/${video_name.replace(/ /g, "-").toLowerCase()}html`)


    return {
        props: {
            video_details: video_details,
            video_link: video_link,
            relatedVideos: relatedVideos,
            videoid: videoid,
            video_name: video_name
        }
    }


}






