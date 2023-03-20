import '@/styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    // fix bottom of image size, need to still do the fade to black
    <div className="h-screen bg-center bg-cover bg-no-repeat bg-hero">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  ) 
}
