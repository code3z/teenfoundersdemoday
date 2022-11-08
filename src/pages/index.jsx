import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Button } from '@/components/Button'
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Teen Founder Demo Day - see future Elon Musks present their startup
        </title>
        <meta
          name="description"
          content="Teen Founder Demo Day is a virtual event where incredible teen founders present their startup to VCs and the audience."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Speakers /> */}
        {/* <Schedule />*/}
        <Sponsors />
        <div className="my-12 flex justify-center">
          <Button href="https://lu.ma/vcs">
            Signup for the demo day!
            <span className="ml-2">🚀</span>
          </Button>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
