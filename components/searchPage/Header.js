/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ArrowRightIcon, } from '@heroicons/react/solid'
import { FilterIcon } from '@heroicons/react/outline'


import { useContext } from 'react'
import videosContext from '../../context/videos/videosContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header({ keyword, pageNumber }) {



    //Use Context
    const context = useContext(videosContext);
    const { setvideos, setSpinner } = context;

    async function menuItemOnClick(key) {
        setSpinner(true)

        const response = await fetch(`https://www.eporner.com/api/v2/video/search/?query=${keyword}&per_page=1000&thumbsize=big&order=${key}&lq=1&format=json`).catch(error => {
            alert(error)
        });
        if (response) {
            const json = await response.json();
            setvideos(json)
            setSpinner(false)

        }

    }
    return (
        <div className='flex items-center p-2 '>
            <ArrowRightIcon className='icon text-gray-400' />
            <p className='text-xl pl-1 pr-1 flex-grow'>{keyword + " Porn Videos"}</p>
            <p className='text-xl pl-1 pr-1 flex-grow'>{`Page-${pageNumber}`}</p>
            <Menu as="div" className="relative  text-left">
                <div className=' w-fit'>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                        Filter
                        <FilterIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item onClick={(key) => { menuItemOnClick('latest') }}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Most Recent
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={(key) => { menuItemOnClick('top-weekly') }}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Weekly-Top
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={(key) => { menuItemOnClick('top-rated') }}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Top-Rated
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={(key) => { menuItemOnClick('top-monthly') }}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Monthly-Top
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={(key) => { menuItemOnClick('longest') }}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Longest                                    </a>
                                )}
                            </Menu.Item>
                            <form method="POST" action="#">
                                <Menu.Item onClick={(key) => { menuItemOnClick('shortest') }}>
                                    {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full text-left px-4 py-2 text-sm'
                                            )}
                                        >
                                            Shortest
                                        </button>
                                    )}
                                </Menu.Item>
                            </form>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

