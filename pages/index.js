import Head from 'next/head'
import SideDrawer from '../components/sideDrawer'
import SplashBanner from '../components/splashBanner'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideDrawer />
      <SplashBanner />
    </div>
  )
}
