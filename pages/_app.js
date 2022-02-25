import Script from 'next/script'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import VideoState from '../context/videos/VideoState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <VideoState>
        <Navbar />
        <div className=''>
          <Component {...pageProps} />
        </div>
        <hr />
        <Footer />
      </VideoState>
    </>
  )
}

export default MyApp
