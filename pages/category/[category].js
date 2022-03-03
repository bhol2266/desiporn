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


    var finalDataArray = []



    const scrape = async (url) => {
    
      var thumbnailArray = []
      var TitleArray = []
      var durationArray = []
      var likedPercentArray = []
      var viewsArray = []
      var previewVideoArray = []
      var hrefArray = []
    
      const response = await fetchdata(url)
      const body = await response.text();
      const $ = cheerio.load(body)
    
    
    
    
    
      $('.video-list.video-rotate.video-list-with-ads .video-item picture img').each((i, el) => {
    
        const data = $(el).attr("data-src")
        thumbnailArray.push(data)
    
    
      })
      $('.video-list.video-rotate.video-list-with-ads .video-item picture img').each((i, el) => {
    
        const data = $(el).attr("alt")
        TitleArray.push(data)
    
    
      })
      $('.video-list.video-rotate.video-list-with-ads .video-item .l').each((i, el) => {
    
        const data = $(el).text()
        durationArray.push(data)
      })
    
    
    
      $('.video-list.video-rotate.video-list-with-ads .video-item .stats').each((i, el) => {
    
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
    
    
      $('.video-list.video-rotate.video-list-with-ads .video-item picture img').each((i, el) => {
    
        const data = $(el).attr("data-preview")
        previewVideoArray.push(data)
      })
    
    
    
      $('.video-list.video-rotate.video-list-with-ads .video-item').each((i, el) => {
    
        const data = $(el).children().eq(1).attr("href")
        if (data) {
          hrefArray.push(`https://spankbang.com${data}`)
        }
    
    
      })
    
    
    
    
    
    
    
      for (let index = 0; index < thumbnailArray.length; index++) {
    
    
    
        finalDataArray.push({
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
    
    await scrape(` https://spankbang.com/category/${category.toLowerCase().trim()}/?o=hot&q=uhd`)

  



    return {
        props: {
            video_collection: finalDataArray,
        }
    }


}