import { } from '@heroicons/react/outline';
import {
    ClockIcon, EyeIcon, PlayIcon, StarIcon, ThumbUpIcon
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from "next/router";






const categories = [
    { name: 'Anal', url: 'https://cdni.pornpics.de/460/7/313/88497592/88497592_021_8fa5.jpg' },
    { name: 'HD Porn 1080p', url: 'https://cdni.pornpics.de/460/7/362/30471030/30471030_015_7e71.jpg' },
    { name: '60 FPS', url: 'https://cdni.pornpics.de/460/1/310/59604542/59604542_011_2aac.jpg' },
    { name: 'Japanese', url: 'https://cdni.pornpics.de/460/1/99/82021823/82021823_013_522e.jpg' },
    { name: 'Teen ', url: 'https://cdni.pornpics.de/460/1/167/50212703/50212703_015_f553.jpg' },
    { name: 'Big tits', url: 'https://cdni.pornpics.de/460/7/433/64871593/64871593_062_891b.jpg' },
    { name: 'Asian', url: 'https://cdni.pornpics.de/460/7/5/75752624/75752624_030_201d.jpg' },
    { name: 'POV', url: 'https://cdni.pornpics.de/460/1/344/82103636/82103636_013_0ae1.jpg' },
    { name: 'Amateur', url: 'https://cdni.pornpics.de/460/7/114/13605905/13605905_060_50e1.jpg' },
    { name: 'MILF', url: 'https://cdni.pornpics.de/1280/7/281/25922230/25922230_170_149c.jpg' },
    { name: 'Lesbian', url: 'https://cdni.pornpics.de/1280/1/305/87899218/87899218_012_5824.jpg' },
    { name: 'Masturbation', url: 'https://cdni.pornpics.de/1280/7/95/32872032/32872032_046_b58f.jpg' },
    { name: 'Interracial', url: 'https://cdni.pornpics.de/1280/7/542/90084337/90084337_070_01b9.jpg' },
    { name: 'Mature', url: 'https://cdni.pornpics.de/1280/7/446/69002270/69002270_022_f3de.jpg' },
    { name: 'Threesome', url: 'https://cdni.pornpics.de/1280/7/141/35770841/35770841_055_09e6.jpg' },
    { name: 'Creampie', url: 'https://cdni.pornpics.de/1280/7/108/55222173/55222173_063_fb89.jpg' },
    { name: 'Hardcore', url: 'https://cdni.pornpics.de/1280/7/409/22813134/22813134_021_6e03.jpg' },
    { name: 'Big Ass', url: 'https://cdni.pornpics.de/1280/1/280/83778472/83778472_008_e015.jpg' },
    { name: 'Home made', url: 'https://cdni.pornpics.de/1280/1/219/64062896/64062896_007_70e2.jpg' },
    { name: 'Blowjob', url: 'https://cdni.pornpics.de/1280/5/5/25487648/25487648_005_bd6f.jpg' },
    { name: 'Group Sex', url: 'https://cdni.pornpics.de/1280/5/97/14911065/14911065_011_bf70.jpg' },
    { name: 'Ebony', url: 'https://cdni.pornpics.de/1280/7/89/80905542/80905542_075_481e.jpg' },
    { name: 'Shemale', url: 'https://cdni.pornpics.de/1280/7/267/71414665/71414665_028_f16d.jpg' },
    { name: 'Pornstar', url: 'https://cdni.pornpics.de/1280/7/368/17852021/17852021_044_7729.jpg' },
    { name: 'Big Dick', url: 'https://cdni.pornpics.de/1280/5/175/57111311/57111311_003_1fa7.jpg' },
    { name: 'Double Penetration', url: 'https://cdni.pornpics.de/1280/7/543/13872063/13872063_083_964d.jpg' },
    { name: 'Blonde', url: 'https://cdni.pornpics.de/1280/7/194/69858345/69858345_001_6534.jpg' },
    { name: 'Cumshot', url: 'https://cdni.pornpics.de/1280/7/542/97681728/97681728_124_debd.jpg' },
    { name: 'anal', url: 'https://cdni.pornpics.de/460/1/345/43173556/43173556_009_0518.jpg' },
    { name: 'HD Sex', url: 'https://cdni.pornpics.de/460/5/185/15186125/15186125_016_77f2.jpg' },
    { name: 'BBW', url: 'https://cdni.pornpics.de/460/7/521/13152372/13152372_008_673d.jpg' },
    { name: 'Webcam', url: 'https://cdni.pornpics.de/460/7/518/57364022/57364022_071_48d5.jpg' },
    { name: 'Lingerie', url: 'https://cdni.pornpics.de/460/7/543/49942398/49942398_041_1cd7.jpg' },
    { name: 'Brunette', url: 'https://cdni.pornpics.de/460/1/256/72714917/72714917_002_9d9f.jpg' },
    { name: 'Toys', url: 'https://cdni.pornpics.de/460/7/63/79595222/79595222_049_5506.jpg' },
    { name: 'Latina', url: 'https://cdni.pornpics.de/460/7/434/91442999/91442999_150_004e.jpg' },
    { name: 'Massage', url: 'https://cdni.pornpics.de/460/7/111/16073917/16073917_024_e1e4.jpg' },
    { name: 'BDSM', url: 'https://cdni.pornpics.de/460/7/490/45013656/45013656_199_f1f4.jpg' },
    { name: 'Gay', url: 'https://cdni.pornpics.de/460/7/558/95523603/95523603_026_022d.jpg' },
    { name: 'Orgy', url: 'https://cdni.pornpics.de/460/7/555/40658739/40658739_095_a626.jpg' },
    { name: 'Public', url: 'https://cdni.pornpics.de/460/7/497/86754571/86754571_014_06bd.jpg' },
    { name: 'Squirt', url: 'https://cdni.pornpics.de/460/1/214/37122526/37122526_002_d09d.jpg' },
    { name: 'Students', url: 'https://cdni.pornpics.de/460/7/36/98263969/98263969_023_361c.jpg' },
    { name: 'Petite', url: 'https://cdni.pornpics.de/460/7/128/37553399/37553399_032_4284.jpg' },
    { name: 'Hentai', url: 'https://cdni.pornpics.de/460/7/276/25257067/25257067_005_7abd.jpg' },
    { name: 'Vintage', url: 'https://cdni.pornpics.de/460/7/561/76500191/76500191_001_bde9.jpg' },
    { name: 'Striptease', url: 'https://cdni.pornpics.de/460/1/339/17890470/17890470_003_7d6a.jpg' },
    { name: 'Indian', url: 'https://cdni.pornpics.de/460/7/99/93207893/93207893_043_5ded.jpg' },
    { name: 'ReadHead', url: 'https://cdni.pornpics.de/460/5/239/18248831/18248831_016_84ec.jpg' },
    { name: 'Small Tits', url: 'https://cdni.pornpics.de/460/7/256/71356565/71356565_023_da73.jpg' },
    { name: 'Handjob', url: 'https://cdni.pornpics.de/460/5/239/78262719/78262719_014_955e.jpg' },
    { name: 'Older men', url: 'https://cdni.pornpics.de/460/7/171/91434514/91434514_018_5fde.jpg' },
    { name: 'VR Porn', url: 'https://cdni.pornpics.de/460/7/111/46295842/46295842_138_1757.jpg' },
    { name: 'outdoor', url: 'https://cdni.pornpics.de/460/7/310/96918935/96918935_026_2cdc.jpg' },
    { name: 'Footjob', url: 'https://cdni.pornpics.de/460/5/166/76434278/76434278_006_2aff.jpg' },
    { name: 'Fetish', url: 'https://cdni.pornpics.de/460/1/145/46645318/46645318_008_98bf.jpg' },
    { name: 'Fat', url: 'https://cdni.pornpics.de/460/1/335/90371170/90371170_007_94d5.jpg' },
    { name: 'Swinger', url: 'https://cdni.pornpics.de/460/7/181/44321573/44321573_044_350a.jpg' },
    { name: 'Spy Cams', url: 'https://cdni.pornpics.de/460/7/145/63647726/63647726_025_7f48.jpg' },
    { name: 'Housewives', url: 'https://cdni.pornpics.de/460/7/153/10743843/10743843_010_c5d6.jpg' },
    { name: 'Bondage', url: 'https://cdni.pornpics.de/460/7/507/60602877/60602877_041_4c58.jpg' },
    { name: 'Bukkake', url: 'https://cdni.pornpics.de/460/1/304/66245615/66245615_012_fe7d.jpg' },
    { name: 'Office', url: 'https://cdni.pornpics.de/460/7/490/29633766/29633766_063_cc9b.jpg' },
    { name: 'HQ Porn', url: 'https://cdni.pornpics.de/460/7/91/71787657/71787657_186_bd9c.jpg' },
    { name: 'Uniform', url: 'https://cdni.pornpics.de/460/7/108/15755816/15755816_030_d77f.jpg' },
    { name: 'Hotel', url: 'https://cdni.pornpics.de/460/7/282/75502610/75502610_012_47f5.jpg' },
    { name: 'For Women', url: 'https://cdni.pornpics.de/460/7/152/97014877/97014877_031_14f4.jpg' },
    { name: 'Fisting', url: 'https://cdni.pornpics.de/460/7/251/93220320/93220320_039_5f26.jpg' },
    { name: 'Sleep', url: 'https://cdni.pornpics.de/460/5/174/11989759/11989759_014_ac2c.jpg' },
    { name: 'Bisexual', url: 'https://cdni.pornpics.de/460/7/555/80053349/80053349_138_1ea5.jpg' },
    { name: 'Nurses', url: 'https://cdni.pornpics.de/460/7/39/25406296/25406296_008_e901.jpg' }
]
function Sidebar() {
    const router = useRouter();

    return (

        <div className="min-w-fit h-fit w-50 border-2 hidden border-gray-300 rounded overflow-hidden mt-1 ml-2 flex-col lg:flex " >
            <div className="bg-yellow-100  pt-1 pl-2 border-gray-300 border-b-2">
                <div className="flex items-center hover:text-red-500 justify-start p-2 ">

                    <ClockIcon className="h-6 w-6" />
                    <Link href="/VideosList">
                        <p className="text-sm pl-4 font-semibold cursor-pointer">History</p>
                    </Link>
                </div>
                <div className="flex items-center hover:text-red-500 justify-start p-2 ">
                    <PlayIcon className="h-6 w-6" />
                    <p className="text-sm pl-4 font-semibold">Newest Videos</p>
                </div>
                <div className="flex items-center hover:text-red-500 justify-start p-2 ">
                    <ThumbUpIcon className="h-6 w-6" />
                    <p className="text-sm pl-4 font-semibold">Best Videos</p>
                </div>
                <div className="flex items-center hover:text-red-500 justify-start p-2 ">
                    <StarIcon className="h-6 w-6" />
                    <p className="text-sm pl-4 font-semibold">Top Rated</p>
                </div>
                <div className="flex items-center hover:text-red-500 justify-start p-2 ">
                    <EyeIcon className="h-6 w-6" />
                    <p className="text-sm pl-4 font-semibold">Most viewed</p>
                </div>
            </div>

            <div className="border-b-2 border-gray-300 bg-gray-100">
                <h2 className="text-md text-start p-1 pl-4 font-bold">Production</h2>
                <div className="flex hover:text-red-500 items-center justify-between text-sm p-1 pl-4 pr-2">
                    <p>All</p>
                    <p>2,954,589</p>
                </div>
                <div className="flex hover:text-red-500 items-center justify-between text-sm p-1 pl-4 pr-2">
                    <p>Professional</p>
                    <p className="text-red-500">2,466,808</p>
                </div>
                <div className="flex hover:text-red-500 items-center justify-between text-sm p-1 pl-4 pr-2">
                    <p>Homemade</p>
                    <p>487,790</p>
                </div>

            </div>

            <div className="border-b-2 border-gray-300 bg-gray-100">
                <h2 className="text-md text-start p-1 pl-4 font-bold">Categories</h2>

                <div className="flex hover:text-red-500 items-center justify-between text-sm p-1 pl-4 pr-2">
                    <p>All</p>
                    <p className="text-red-500">2,954,589</p>
                </div>
                <div>
                    {categories.map(category => {
                        return (

                            <div onClick={() => { router.push(`/category/${category.name}`) }} key={category.name} className="flex hover:text-red-500 items-center justify-between text-sm p-1 pl-4 pr-2 cursor-pointer">
                                <p>{category.name}</p>
                                <p>{Math.floor(Math.random() * (500000 - 200000 + 1) + 20000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>

                        )

                    })}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
