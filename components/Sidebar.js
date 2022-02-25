import React from 'react'

function Sidebar() {

    const categories = [
        {
            category: 'HD Porn',
            link: 'https://justindianporn.me/categories/hd-porn/'
        },
        {
            category: 'Amateur',
            link: 'https://justindianporn.me/categories/amateur/'
        },
        {
            category: 'Anal',
            link: 'https://justindianporn.me/categories/anal/'
        },
        {
            category: 'Ass',
            link: 'https://justindianporn.me/categories/ass/'
        },
        {
            category: 'Audio Stories',
            link: 'https://justindianporn.me/categories/audio-stories/'
        },
        {
            category: 'Aunty',
            link: 'https://justindianporn.me/categories/aunty/'
        },
        {
            category: 'BBW',
            link: 'https://justindianporn.me/categories/bbw/'
        },
        {
            category: 'Bhabhi',
            link: 'https://justindianporn.me/categories/bhabhi/'
        },
        {
            category: 'Big Boobs',
            link: 'https://justindianporn.me/categories/big-boobs/'
        },
        {
            category: 'Big Cock',
            link: 'https://justindianporn.me/categories/big-cock/'
        },
        {
            category: 'Blowjob',
            link: 'https://justindianporn.me/categories/blowjob/'
        },
        {
            category: 'Bollywood',
            link: 'https://justindianporn.me/categories/bollywood/'
        },
        {
            category: 'Cartoon',
            link: 'https://justindianporn.me/categories/cartoon/'
        },
        {
            category: 'College',
            link: 'https://justindianporn.me/categories/college/'
        },
        {
            category: 'Dildo',
            link: 'https://justindianporn.me/categories/dildo/'
        },
        {
            category: 'Gay',
            link: 'https://justindianporn.me/categories/gay/'
        },
        {
            category: 'Group Sex',
            link: 'https://justindianporn.me/categories/group-sex/'
        },
        {
            category: 'Hardcore',
            link: 'https://justindianporn.me/categories/hardcore/'
        },
        {
            category: 'Hidden cam',
            link: 'https://justindianporn.me/categories/hidden-cam/'
        },
        {
            category: 'Home Sex',
            link: 'https://justindianporn.me/categories/home-sex/'
        },
        {
            category: 'House Wife',
            link: 'https://justindianporn.me/categories/house-wife/'
        },
        {
            category: 'Lesbian',
            link: 'https://justindianporn.me/categories/lesbian/'
        },
        {
            category: 'Maid',
            link: 'https://justindianporn.me/categories/maid/'
        },
        {
            category: 'Mallu',
            link: 'https://justindianporn.me/categories/mallu/'
        },
        {
            category: 'Masturbation',
            link: 'https://justindianporn.me/categories/masturbation/'
        },
        {
            category: 'Mature',
            link: 'https://justindianporn.me/categories/mature/'
        },
        {
            category: 'MMS Scandals',
            link: 'https://justindianporn.me/categories/mms-scandals/'
        },
        {
            category: 'Mom Sex',
            link: 'https://justindianporn.me/categories/mom-sex/'
        },
        {
            category: 'NRI',
            link: 'https://justindianporn.me/categories/nri/'
        },
        {
            category: 'Office Sex',
            link: 'https://justindianporn.me/categories/office-sex/'
        },
        {
            category: 'Outdoor',
            link: 'https://justindianporn.me/categories/outdoor/'
        },
        {
            category: 'POV',
            link: 'https://justindianporn.me/categories/pov/'
        },
        {
            category: 'Punjabi',
            link: 'https://justindianporn.me/categories/punjabi/'
        },
        {
            category: 'Saree',
            link: 'https://justindianporn.me/categories/saree/'
        },
        {
            category: 'Sex toys',
            link: 'https://justindianporn.me/categories/sex-toys/'
        },
        {
            category: 'Shemale',
            link: 'https://justindianporn.me/categories/shemale/'
        },
        {
            category: 'Shower',
            link: 'https://justindianporn.me/categories/shower/'
        },
        {
            category: 'Sister',
            link: 'https://justindianporn.me/categories/sister/'
        },
        {
            category: 'Teen',
            link: 'https://justindianporn.me/categories/teen/'
        },
        {
            category: 'Threesome',
            link: 'https://justindianporn.me/categories/threesome/'
        },
        {
            category: 'Village',
            link: 'https://justindianporn.me/categories/village/'
        }
    ]

    return (
        <div className='pt-1 hidden md:flex md:flex-col' >
            {categories.map(category => {
                return (
                    <a key={category} href={`/category/${category.category}`}>
                        <p className="w-44 text-md border-2 border-white hover:bg-red-600 rounded-md text-white  p-1 pl-4 pr-2 cursor-pointer bg-black opacity-75">{category.category}</p>
                    </a>
                )
            })}

        </div>
    )
}

export default Sidebar