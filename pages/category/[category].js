import cheerio from 'cheerio';
import { useRouter } from "next/router";
import fetchdata from 'node-fetch';
import Sidebar from "../../components/Sidebar";
import Videos from "../../components/Videos";



function Category({ video_collection }) {

    const router = useRouter();


    return (
        <div className="flex">

            {/* <Header keyword={key} /> */}
            <Sidebar />
            <Videos data={video_collection} />

        </div>
    )
}

export default Category




export async function getServerSideProps(context) {

    const { category } = context.query;


    var dataArray = []

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
            dataArray.push({
                TitleArray: TitleArray[Page],
                liked: liked[Page],
                disliked: disliked[Page],
                durationArray: durationArray[Page],
                hrefArray: hrefArray[Page],
                thumbnail: thumbnail[Page],
            })
        }


    }
    await scrape(`https://justindianporn.me/categories/${category.trim().toLowerCase().replace(" ", "-")}`)

  



    return {
        props: {
            video_collection: dataArray,
        }
    }


}