import Head from 'next/head'
import Image from 'next/image'
import Carusel from '../components/carusel/carusel'
import Fuculy from '../components/fuclities/fuculy'
import Partner from '../components/partners/partner'
import Score from '../components/score/score'
import Video from '../components/Video/video'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
        <title >Tdtu ilmiy-tadqiqot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={'flex w-full justify-center'}>
               <Carusel  />
        </div>
      
        <Fuculy />
        <Video />
        <Partner />
        <Score fakul={300} students ={25000} teachers={990} forwork={50}  />
      </main>
    </div>
  )
}
