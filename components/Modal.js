import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useContext } from 'react'
import videosContext from '../context/videos/videosContext'
function Modal() {


    // backdrop - blur

    const context = useContext(videosContext);
    const { disclaimerShow, setdisclaimerShow } = context;



    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex  justify-center m-4 items-center h-full">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0   " />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="md:w-4/5 lg:w-3/5 2xl:w-2/5 sm:m-8  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all mb-10">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                                        <Dialog.Title as="h3" className="text-2xl md:text-3xl text-red-500 leading-6 font-bold">
                                            Chutlunds is adults only website!
                                        </Dialog.Title>
                                        <div className="mt-2 text-sm md:text-lg text-gray-800 ">
                                            <p>
                                                Chutlunds is strictly limited to those over 18 or of legal age in your jurisdiction, whichever is greater.
                                            </p>
                                            <p>One of our core goals is to help parents restrict access to Chutlunds for minors, so we have ensured that Chutlunds is, and remains, fully compliant with the RTA (Restricted to Adults) code. This means that all access to the site can be blocked by simple parental control tools. It is important that responsible parents and guardians take the necessary steps to prevent minors from accessing unsuitable content online, especially age-restricted content.</p>
                                            <p>Anyone with a minor in their household or under their supervision should implement basic parental control protections, including computer hardware and device settings, software installation, or ISP filtering services, to block your minors from accessing inappropriate content.

                                            </p>
                                            <p className='text-black font-bold text-lg sm:text-xl'>To enter Chutlunds you must be 18 or older</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pb-4 flex flex-col justify-center m-3 sm:m-4 md:m-6 ">
                                <button
                                    type="button"
                                    className="w-full    rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
                                    onClick={() => {
                                        setOpen(false)
                                        setdisclaimerShow(false)
                                        localStorage.setItem("disclaimerShow","false")
                                    }}
                                >
                                    I'm older than 18 years, Enter Chutlunds
                                </button>

                                <div>
                                    <div className='flex items-center justify-between p-2 mt-3 '>

                                        <a className='font-semibold cursor-pointer underline'>Read more about how to protect your minors
                                        </a>
                                        <div className='p-2 rounded  bg-black'
                                        >
                                            <img
                                                src={"https://static-sg-cdn.eporner.com/new/rta.gif"}
                                                height={40}
                                                width={80}
                                                layout='fixed'
                                                alt='loading'
                                            ></img>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal;
