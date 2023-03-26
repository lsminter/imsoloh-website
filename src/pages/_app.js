import '@/styles/globals.css'
import Layout from '../components/Layout'
import Footer from '../components/Footer.js'

export default function App({ Component, pageProps }) {
  return (
    // fix bottom of image size, need to still do the fade to black
    <div className="h-screen text-white bg-center bg-cover bg-no-repeat bg-hero">
      <Layout>
        <Component {...pageProps} />
      <Footer />
      </Layout>
    </div>
  ) 
}
