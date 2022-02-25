import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    const [currentLocation, setcurrentLocation] = useState(null)


    const router = useRouter();

    const [videos, setvideos] = useState([]);
    const [spinnerLoading, setspinnerLoading] = useState(false)

    const [DarkTheme, setDarkTheme] = useState('')
    const [currentPage, setcurrentPage] = useState(1)

    //User must be older than 18years old  state
    const [disclaimerShow, setdisclaimerShow] = useState(true);



    const [countryBlocked, setcountryBlocked] = useState(false)


    //Get All videos+

    const getVideos = async (key) => {
        setspinnerLoading(true)


        if (key === null) {
            setvideos(data)
            setspinnerLoading(false)

        }
        else {
            console.log(key);
            key = key.trim().toLowerCase();
            const response = await fetch(`https://www.eporner.com/api/v2/video/search/?query=${key}&per_page=1000&thumbsize=big&order=latest&lq=1&format=json`).catch(error => {
                // alert(error)
            });

            console.log(`https://www.eporner.com/api/v2/video/search/?query=${key}&per_page=1000&thumbsize=big&order=latest&lq=1&format=json`);

            try {

                const json = await response.json();
                setvideos(json)
                localStorage.setItem('recentloadedVideos', JSON.stringify(json.videos));


            } catch (error) {

                setvideos(data)

            }
            setspinnerLoading(false)

        }
    }

    function setSpinner(boolean) {
        setspinnerLoading(boolean)

    }
    function setDarkThemeFunc(theme) {
        setDarkTheme(theme)

    }

 



    return (
        <videosContext.Provider value={{ videos, getVideos, spinnerLoading, setcurrentPage, currentPage, setvideos, setSpinner, setDarkThemeFunc, DarkTheme,  currentLocation, setcurrentLocation, disclaimerShow, setdisclaimerShow, countryBlocked, setcountryBlocked }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;