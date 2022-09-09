import '../styles/globals.css'
import '../styles/style.css'
import Navbar from '../pages/components/navbar'

function MyApp({ Component, pageProps }) {
  return ( <> 
  <Navbar/>
  <Component {...pageProps} />
   </>
  )
}

export default MyApp
// This file is global if you want to make changes on all files.