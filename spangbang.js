import fetchdata from 'node-fetch';
import cheerio from 'cheerio';
import extractUrls from "extract-urls";
import fs from 'fs';






var finalDataArray = []
const scrape = async (url) => {

  var thumbnailArray = []
  var TitleArray = []
  var durationArray = []
  var likedPercentArray = []
  var viewsArray = []
  var previewVideoArray = []
  var hrefArray = []
  var video_link = {}

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
      video_link: video_link[index],

    })
  }

}







for (let index = 1; index <= 50; index++) {
  await scrape(`https://spankbang.com/s/indian/${index}/`)

  console.log(`PAGE-${index} COMPLETED!`);
  fs.writeFileSync(`JsonData/indian/indian${index}.json`, JSON.stringify(finalDataArray));
  finalDataArray = []


}




