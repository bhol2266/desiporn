import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import jsonData from "../../JsonData/categoryImages/data.json"





function Index() {

    const router = useRouter();


    const categories = [
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/1.jpg',
            Title: 'Amateur'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/2.jpg',
            Title: 'Anal'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/3.jpg',
            Title: 'Asian'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/4.jpg',
            Title: 'Babe'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/5.jpg',
            Title: 'BBW'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/48.jpg',
            Title: 'Big Ass'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/6.jpg',
            Title: 'Big Dick'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/7.jpg',
            Title: 'Big Tits'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/41.jpg',
            Title: 'Blonde'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/8.jpg',
            Title: 'Blowjob'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/9.jpg',
            Title: 'Bondage'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/49.jpg',
            Title: 'Brunette'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/50.jpg',
            Title: 'Cam'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/38.jpg',
            Title: 'Compilation'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/10.jpg',
            Title: 'Creampie'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/11.jpg',
            Title: 'Cumshot'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/12.jpg',
            Title: 'Deep Throat'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/13.jpg',
            Title: 'DP'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/14.jpg',
            Title: 'Ebony'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/17.jpg',
            Title: 'Fetish'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/18.jpg',
            Title: 'Fisting'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/37.jpg',
            Title: 'Gay'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/19.jpg',
            Title: 'Groupsex'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/20.jpg',
            Title: 'Handjob'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/21.jpg',
            Title: 'Hardcore'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/39.jpg',
            Title: 'Hentai'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/15.jpg',
            Title: 'Homemade'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/46.jpg',
            Title: 'Indian'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/22.jpg',
            Title: 'Interracial'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/47.jpg',
            Title: 'Japanese'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/23.jpg',
            Title: 'Latina'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/24.jpg',
            Title: 'Lesbian'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/25.jpg',
            Title: 'Massage'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/26.jpg',
            Title: 'Masturbation'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/27.jpg',
            Title: 'Mature'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/28.jpg',
            Title: 'MILF'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/30.jpg',
            Title: 'POV'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/40.jpg',
            Title: 'Redhead'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/32.jpg',
            Title: 'Shemale'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/43.jpg',
            Title: 'Small Tits'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/33.jpg',
            Title: 'Solo'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/34.jpg',
            Title: 'Squirt'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/42.jpg',
            Title: 'Striptease'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/35.jpg',
            Title: 'Teen (18+)'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/44.jpg',
            Title: 'Threesome'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/36.jpg',
            Title: 'Toy'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/45.jpg',
            Title: 'Vintage'
        },
        {
            thumbnailImage: 'https://spankbang.com//static/desktop/Images/categories/ids/51.jpg',
            Title: 'VR'
        }
    ]








    return (

        <div className="">
            <div className='flex items-center p-2 m-1 justify-between bg-gray-200 rounded-lg border-2 border-gray-300 shadow-md'>
                <p className='border-black border-2 rounded-md text-2xl font-bold  '></p>
                <p className='flex-grow text-3xl  ml-4'>Porn Categories</p>
            </div>
            <p className="bg-yellow-100 rounded-lg border-2 border-gray-300 shadow-md p-2 m-1">
                ChutLund covers all and every possible porn category that you can think of, even the kinkiest ones that might not be as popular as anal, teen, MILF, threesome and amateur. Regardless of your taste, you can easily find what suits your interest at any given time. Today, you might be all about blowjobs, tomorrow about BBW scenes and a week from now, you would like to experience interracial category - all this one ChutLund.
            </p>

            <div className={`grid grid-cols-2 p-1 sm:grid-cols-3 gap-x-1  md:grid-cols-4 lg:grid-cols-5`}>
                {jsonData.map(category => {
                    return (
                        <a key={category.name} href={`/category/${category.name.toLowerCase().trim()}**1`}>
                            <div className='  relative m-1 sm:m-2  hover:scale-105 transform transition duration-150  ' >
                                <img
                                    className='rounded w-full object-cover aspect-box'
                                    alt='loading'
                                    src={category.url}
                                    loading="lazy"
                                ></img>
                                <p className='rounded-b absolute text-md sm:text-lg font-bold p-1 bottom-0 w-full text-center  z-10 text-white bg-transparent bg-black bg-opacity-50'>{category.name.charAt(0).toUpperCase() + category.name.substring(0, category.name.indexOf('.png')).substring(1)}</p>
                            </div>
                        </a>

                        // items[i].charAt(0).toUpperCase() + items[i].substring(1);


                    )
                })}

            </div>
        </div>
    )
}


export default Index


