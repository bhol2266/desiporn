import {
    ClockIcon
} from '@heroicons/react/outline';
import {
    EyeIcon, MinusIcon, PlayIcon,
    PlusIcon, ThumbUpIcon, FilmIcon,ThumbDownIcon
} from '@heroicons/react/solid';
import cheerio from 'cheerio';
import fetchdata from 'node-fetch';
import { useContext, useEffect, useState } from 'react';
import Videos from '../../components/Videos';









function Videoplayer({ video_link, video_details,relatedVideos }) {


    const [data, setdata] = useState({});
    const [videolinkState, setvideolinkState] = useState(video_link);



    return (
        <>





                <div>
                    <p className='text-2xl pl-2 '>{video_details.title}</p>

                    <div className='flex space-x-2 sm:space-x-6'>

                        <div className='flex items-center'>
                            <ClockIcon className='icon hover:scale-100' />
                            <p className='text-xs font-bold'>{video_details.duration}</p>
                        </div>
                        <div className='flex items-center'>
                            <FilmIcon className='icon hover:scale-100' />
                            <p className='text-xs font-bold'> 480p, 720p, 1080p, 4K</p>
                        </div>

                    </div>

               


                    <div className='p-1 border-2 border-gray-200 rounded overflow-hidden cursor-pointer md:w-4/5'>

                        <div className=' hover:brightness-75 group  relative'>


                            <video autoPlay='autoplay' poster={video_details.thumbnail} className={`animate-fade `} width="1280" height="720" controls >
                                <source src={videolinkState} type="video/mp4" />

                            </video>
                        </div>
                        <div className="flex justify-start space-x-10">

                            <div className="flex justify-center items-center ">
                                <ClockIcon className="icon text-red-500" />
                                <p>{video_details.duration}</p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <ThumbUpIcon className="icon text-yellow-400" />
                                <p>{video_details.liked}</p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <ThumbDownIcon className="icon text-yellow-400" />
                                <p>{video_details.disliked}</p>
                            </div>
                        

                        </div>
                    
                    </div>




           

                    <div className='flex p-1 flex-col  items-center md:flex-row sm:justify-items-start'>
                        <p className='font-bold text-red-500 text-xl'>Videos related to</p>
                        <p className='font-bold pl-1'>{video_details.title}</p>
                    </div>
                    {videolinkState &&
                        <Videos data={relatedVideos} />
                    }

                    


                </div>

            

            {/* <Outstreams />
            <RecommendedAds /> */}


        </>

    )
}





export default Videoplayer


export async function getServerSideProps(context) {

    const { link, title, duration, liked, disliked, thumbnail } = context.query;

    const videos_details = {
        link: link,
        title: title,
        duration: duration,
        liked: liked,
        disliked: disliked,
        thumbnail: thumbnail,
    }


    var video_link = ""
    var relatedVideos = []
    const scrape = async (url) => {

        var TitleArray = []
        var liked = []
        var disliked = []
        var durationArray = []
        var hrefArray = []
        var thumbnail = []


        const response = await fetchdata(url)
        const body = await response.text();
        const $ = cheerio.load(body)



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
    await scrape(link)

    console.log(videos_details);

    return {
        props: {
            video_details: videos_details,
            video_link:video_link,
            relatedVideos:relatedVideos
        }
    }


}






