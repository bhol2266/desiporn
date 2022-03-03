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



const scrape2 = async (url) => {


  var video_link = ''
  var video_qualities_available_withURL = {}
  var screenshotsArray = []
  var video_qualities_available = []


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
    video_qualities_available_withURL[video_qualities_available[index]] = video_link.replace(preloaded_video_quality, video_qualities_available[index])
  }


  $('.timeline div span img').each((i, el) => {

    const data = $(el).attr("data-src")
    screenshotsArray.push(data)
  })






  // console.log(video_qualities_available_withURL);
  // console.log(screenshotsArray);
  // console.log(video_qualities_available);
  // console.log(video_link);


  for (let index = 0; index < finalDataArray.length; index++) {
    finalDataArray[index].video_link = video_link;
    finalDataArray[index]['video_qualities_available'] = video_qualities_available;
    finalDataArray[index]['video_qualities_available_withURL'] = video_qualities_available_withURL;
    finalDataArray[index]['screenshotsArray'] = screenshotsArray;

  }

}




for (let index = 1; index <= 5; index++) {
  await scrape(`https://spankbang.com/s/indian/${index}/`)

  console.log(`PAGE-${index} COMPLETED!`);
  fs.writeFileSync(`JsonData/indian/indian${index}.json`, JSON.stringify(finalDataArray));
}




