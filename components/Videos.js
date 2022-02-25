import VideoThumbnail from "./VideoThumbnail"
import { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import BannerAds from "./Ads/BannerAds";
import { useContext, useEffect } from 'react'
import videosContext from '../context/videos/videosContext'



function Videos({ data }) {

    
    const context = useContext(videosContext);
    const { setdisclaimerShow, } = context;

    useEffect(() => {
        if (localStorage.getItem("disclaimerShow") === "false") {
            console.log(localStorage.getItem("disclaimerShow"));
            setdisclaimerShow(false)
        }
    }, [])

    //Scroll to top
    const scrollToRef = (ref) => { window.scrollTo({ top:  ref.current.offsetTop, behavior: 'smooth' }); };
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
 


    // Shuffle Videos
    function shuffleData(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    // Pagination Functions 
    const [pageNumber, setpageNumber] = useState(0);
    const videos_perPage = 20;
    const pageVisited = pageNumber * videos_perPage;
    const pageCount = Math.ceil(data.length / videos_perPage);

    const changePage = ({ selected }) => {
        setpageNumber(selected)
        executeScroll();
    }



    const displayVideos = data.slice(pageVisited, videos_perPage + pageVisited).map(video => {

        return (
            <VideoThumbnail key={video.id} details={video} />

        )
    })


    return (
        <div>

            <BannerAds />


            <div ref={myRef} className="grid grid-cols-1 p-1 sm:pl-4 sm:pr-4 sm:grid-cols-2 gap-x-1  md:grid-cols-3 lg:grid-cols-4 ">

                {displayVideos}
            </div>


            <BannerAds />

            <div className="w-3/4 mx-auto p-2 bg-red-500 text-white ">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={"next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'flex justify-around items-center'}
                    previousLinkClassName={'bg-red-800  hover:bg-red-900 text-white text-sm p-2 pl-4 pr-4 m-1 rounded'}
                    nextLinkClassName={'bg-red-800  hover:bg-red-900 text-white text-sm p-2 pl-4 pr-4 m-1 rounded'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={' font-bold  rounded p-1 pl-2 pr-2 text-black'}
                />
            </div>

        </div>
    )
}

export default Videos
