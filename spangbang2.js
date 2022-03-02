import fetchdata from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import extractUrls from "extract-urls";

import jsonArray from './indian.json'

console.log(JSON.parse(jsonArray.videos[1]));

var finalDataArray = [
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10641908/1/0/w:800/t6-enh/wicked-gorgeous-babe-has-cas.jpg',
        TitleArray: 'Wicked - Gorgeous Babe Has Casual Sex And Loves it',
        durationArray: '10m',
        likedPercentArray: '66%',
        viewsArray: '35K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10641908/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/6c3ck/video/wicked+gorgeous+babe+has+casual+sex+and+loves+it',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/4989657/4/9/w:800/t6-enh/cute-indian-girl-and-boyfriend.jpg',
        TitleArray: 'Cute Indian girl and boyfriend have fun in bed.',
        durationArray: '47m',
        likedPercentArray: '75%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/4989657/4/9/td.mp4',
        hrefArray: 'https://spankbang.com/2yy1l/video/cute+indian+girl+and+boyfriend+have+fun+in+bed',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10474916/1/0/w:800/t6-enh/sexy-british-indian-girl-multi.jpg',
        TitleArray: 'Sexy British Indian girl multiple creampies',
        durationArray: '38m',
        likedPercentArray: '77%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10474916/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/68ihw/video/sexy+british+indian+girl+multiple+creampies',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11076839/1/1/w:800/t6-enh/hot-indian-girl-solo-masturbat.jpg',
        TitleArray: 'Hot Indian Girl Solo Masturbation',
        durationArray: '5m',
        likedPercentArray: '62%',
        viewsArray: '1.6K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11076839/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lexz/video/hot+indian+girl+solo+masturbation',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/6728047/6/7/w:800/t6-enh/indian.jpg',
        TitleArray: 'Indian',
        durationArray: '44m',
        likedPercentArray: '86%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/6728047/6/7/td.mp4',
        hrefArray: 'https://spankbang.com/407e7/video/indian',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/3542565/3/5/w:800/t6-enh/indian-babe-sahara-creampie.jpg',
        TitleArray: 'Indian babe Sahara creampie',
        durationArray: '29m',
        likedPercentArray: '88%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/3542565/3/5/td.mp4',
        hrefArray: 'https://spankbang.com/23xgl/video/indian+babe+sahara+creampie',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/3549646/3/5/w:800/t6-enh/indian-girls-getting-bred-by-w.jpg',
        TitleArray: 'Indian girls getting bred by white men',
        durationArray: '144m',
        likedPercentArray: '91%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/3549646/3/5/td.mp4',
        hrefArray: 'https://spankbang.com/242xa/video/indian+girls+getting+bred+by+white+men',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/8626390/8/6/w:800/t6-enh/indian-desi-girl-fucked-with-h.jpg',
        TitleArray: 'Indian desi girl fucked with her office colic 07479210451',
        durationArray: '7m',
        likedPercentArray: '93%',
        viewsArray: '15K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/8626390/8/6/td.mp4',
        hrefArray: 'https://spankbang.com/54w5y/video/indian+desi+girl+fucked+with+her+office+colic+07479210451',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11077261/1/1/w:800/t6-enh/kokohontas-mixed-native-indian.jpg',
        TitleArray: 'kokohontas mixed native indian n black never had king gutta bbc',
        durationArray: '6m',
        likedPercentArray: '100%',
        viewsArray: '220',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11077261/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lf9p/video/kokohontas+mixed+native+indian+n+black+never+had+king+gutta+bbc',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10854640/1/0/w:800/t6-enh/houston-own-slim-thick-ebony-n.jpg',
        TitleArray: 'houston own slim thick ebony n cherokee indian kokohontas fucked n guts king gutta',
        durationArray: '10m',
        likedPercentArray: '94%',
        viewsArray: '2.5K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10854640/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/6gnhs/video/houston+own+slim+thick+ebony+n+cherokee+indian+kokohontas+fucked+n+guts+king+gutta',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10515323/1/0/w:800/t6-enh/indian-slut-has-hardcore-gangb.jpg',
        TitleArray: 'Indian slut has hardcore gangbang session with five hard rods',
        durationArray: '22m',
        likedPercentArray: '67%',
        viewsArray: '7K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10515323/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/69dob/video/indian+slut+has+hardcore+gangbang+session+with+five+hard+rods',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/8211056/8/2/w:800/t5-enh/indian-lesbian-web-series.jpg',
        TitleArray: 'indian lesbian web series',
        durationArray: '31m',
        likedPercentArray: '63%',
        viewsArray: '140K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/8211056/8/2/td.mp4',
        hrefArray: 'https://spankbang.com/4vzow/video/indian+lesbian+web+series',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11078530/1/1/w:800/t6-enh/indian-bg-girl-masturbating-so.jpg',
        TitleArray: 'Indian BG Girl masturbating solo fingering',
        durationArray: '7m',
        likedPercentArray: '71%',
        viewsArray: '360',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11078530/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lg8y/video/indian+bg+girl+masturbating+solo+fingering',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/5023745/5/0/w:800/t1-enh/kick-ass-chicks-43-indian-gir.jpg',
        TitleArray: 'Kick Ass Chicks 43: Indian Girls',
        durationArray: '168m',
        likedPercentArray: '75%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/5023745/5/0/td.mp4',
        hrefArray: 'https://spankbang.com/2zoch/video/kick+ass+chicks+43+indian+girls',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/1973638/1/9/w:800/t4-enh/busty-indian-milf-cheating-w.jpg',
        TitleArray: 'Busty Indian MILF - Cheating Wife Priya Fucks Realtor',
        durationArray: '37m',
        likedPercentArray: '88%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/1973638/1/9/td.mp4',
        hrefArray: 'https://spankbang.com/16ava/video/busty+indian+milf+cheating+wife+priya+fucks+realtor',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10513396/1/0/w:800/t6-enh/sexy-indian-babe-sucks-and-rid.jpg',
        TitleArray: 'Sexy Indian babe sucks and rides a group of cocks at a party',
        durationArray: '28m',
        likedPercentArray: '76%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10513396/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/69c6s/video/sexy+indian+babe+sucks+and+rides+a+group+of+cocks+at+a+party',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/3437036/3/4/w:800/t8-enh/mature-indian-pov.jpg',
        TitleArray: 'Mature Indian Pov',
        durationArray: '28m',
        likedPercentArray: '78%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/3437036/3/4/td.mp4',
        hrefArray: 'https://spankbang.com/21o18/video/mature+indian+pov',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/6498467/6/4/w:800/t6-enh/indian-couple.jpg',
        TitleArray: 'indian couple',
        durationArray: '50m',
        likedPercentArray: '72%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/6498467/6/4/td.mp4',
        hrefArray: 'https://spankbang.com/3va8z/video/indian+couple',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/4661812/4/6/w:800/t6-enh/lesbian-cute-indian-girls.jpg',
        TitleArray: 'Lesbian Cute Indian Girls',
        durationArray: '61m',
        likedPercentArray: '80%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/4661812/4/6/td.mp4',
        hrefArray: 'https://spankbang.com/2rx2s/video/lesbian+cute+indian+girls',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/3711999/3/7/w:800/t9-enh/sexy-mature-indian-aunty.jpg',
        TitleArray: 'Sexy mature Indian aunty',
        durationArray: '61m',
        likedPercentArray: '77%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/3711999/3/7/td.mp4',
        hrefArray: 'https://spankbang.com/27k73/video/sexy+mature+indian+aunty',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/2353533/2/3/w:800/t4-enh/indian-desi-interracial.jpg',
        TitleArray: 'Indian Desi Interracial',
        durationArray: '42m',
        likedPercentArray: '91%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/2353533/2/3/td.mp4',
        hrefArray: 'https://spankbang.com/1efzx/video/indian+desi+interracial',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11076052/1/1/w:800/t6-enh/lasika-indian-wife-shared-by-3.jpg',
        TitleArray: 'Lasika indian wife shared by 3 white french men',
        durationArray: '30m',
        likedPercentArray: '90%',
        viewsArray: '3.4K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11076052/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lec4/video/lasika+indian+wife+shared+by+3+white+french+men',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/2395221/2/3/w:800/t6-enh/indian-couple.jpg',
        TitleArray: 'Indian couple',
        durationArray: '29m',
        likedPercentArray: '76%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/2395221/2/3/td.mp4',
        hrefArray: 'https://spankbang.com/1fc5x/video/indian+couple',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/8061629/8/0/w:800/t4-enh/indian-bbw-mature-teasing-in-b.jpg',
        TitleArray: 'indian bbw mature teasing in block nylons',
        durationArray: '7m',
        likedPercentArray: '91%',
        viewsArray: '6.7K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/8061629/8/0/td.mp4',
        hrefArray: 'https://spankbang.com/4sse5/video/indian+bbw+mature+teasing+in+block+nylons',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/4619027/4/6/w:800/t5-enh/indian-actress-with-director.jpg',
        TitleArray: 'indian actress with director',
        durationArray: '30m',
        likedPercentArray: '78%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/4619027/4/6/td.mp4',
        hrefArray: 'https://spankbang.com/2r02b/video/indian+actress+with+director',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/5546466/5/5/w:800/t6-enh/indian-webcam-show-03.jpg',
        TitleArray: 'indian webcam show 03',
        durationArray: '122m',
        likedPercentArray: '74%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/5546466/5/5/td.mp4',
        hrefArray: 'https://spankbang.com/3avoi/video/indian+webcam+show+03',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/3842733/3/8/w:800/t6-enh/hot-indian-honeymoon.jpg',
        TitleArray: 'hot indian honeymoon',
        durationArray: '78m',
        likedPercentArray: '80%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/3842733/3/8/td.mp4',
        hrefArray: 'https://spankbang.com/2ad2l/video/hot+indian+honeymoon',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/6556882/6/5/w:800/t6-enh/indian-desi-5.jpg',
        TitleArray: 'Indian Desi 5',
        durationArray: '27m',
        likedPercentArray: '79%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/6556882/6/5/td.mp4',
        hrefArray: 'https://spankbang.com/3wjbm/video/indian+desi+5',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11078281/1/1/w:800/t4-enh/indian-milf-with-big-tits-cums.jpg',
        TitleArray: 'Indian Milf with Big Tits Cums Over',
        durationArray: '21m',
        likedPercentArray: '96%',
        viewsArray: '1.2K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11078281/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lg21/video/indian+milf+with+big+tits+cums+over',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10623407/1/0/w:800/t6-enh/indian-queen-busty-baby-dolls.jpg',
        TitleArray: 'Indian Queen Busty Baby Dolls',
        durationArray: '36m',
        likedPercentArray: '76%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10623407/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/6bp2n/video/indian+queen+busty+baby+dolls',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/8228119/8/2/w:800/t6-enh/indian.jpg',
        TitleArray: 'Indian',
        durationArray: '26m',
        likedPercentArray: '88%',
        viewsArray: ' ',
        previewVideoArray: 'https://tbv.sb-cd.com/t/8228119/8/2/td.mp4',
        hrefArray: 'https://spankbang.com/4wcuv/video/indian',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/10854603/1/0/w:800/t6-enh/king-gutta-fucks-mixed-native.jpg',
        TitleArray: 'king gutta fucks mixed native indian n black too fine slim thick kokohontas',
        durationArray: '6m',
        likedPercentArray: '61%',
        viewsArray: '2.3K',
        previewVideoArray: 'https://tbv.sb-cd.com/t/10854603/1/0/td.mp4',
        hrefArray: 'https://spankbang.com/6gngr/video/king+gutta+fucks+mixed+native+indian+n+black+too+fine+slim+thick+kokohontas',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11079364/1/1/w:800/t6-enh/shana-love-the-fukc.jpg',
        TitleArray: 'SHAna love the fukc',
        durationArray: '48m',
        likedPercentArray: '93%',
        viewsArray: '42',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11079364/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lgw4/video/shana+love+the+fukc',
        video_link: undefined
    },
    {
        thumbnailArray: 'https://tb.sb-cd.com/t/11078687/1/1/w:800/t6-enh/latex-couple.jpg',
        TitleArray: 'Latex couple',
        durationArray: '7m',
        likedPercentArray: '100%',
        viewsArray: '22',
        previewVideoArray: 'https://tbv.sb-cd.com/t/11078687/1/1/td.mp4',
        hrefArray: 'https://spankbang.com/6lgdb/video/latex+couple',
        video_link: undefined
    }
]



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




    console.log(screenshotsArray);

    for (let index = 0; index < finalDataArray.length; index++) {
        finalDataArray[index].video_link = video_link;
        finalDataArray[index]['video_qualities_available'] = video_qualities_available;
        finalDataArray[index]['video_qualities_available_withURL'] = video_qualities_available_withURL;
        finalDataArray[index]['screenshotsArray'] = screenshotsArray;

    }

}


for (let index = 0; index < finalDataArray.length; index++) {
    // await scrape2(finalDataArray[index].hrefArray)

}

fs.writeFileSync(`indian.json`, JSON.stringify(finalDataArray));
