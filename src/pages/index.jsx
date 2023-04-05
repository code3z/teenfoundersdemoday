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
        <title>AoTF: The Demo Day</title>
        <meta
          name="description"
          content="Teen Founder Demo Day is a virtual event where incredible teen founders present their startup to VCs and the audience."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        {/* <Schedule />*/}
        {/* <Sponsors /> */}
        {/* <div className="my-12 flex items-center justify-center space-x-8">
          <Button href="https://lu.ma/aotfdemoday">
            Signup as a VC
            <span className="ml-2">🚀</span>
          </Button>
          <a
            href="https://book.vimcal.com/p/jairelan/aotf"
            className="text-white hover:underline"
          >
            Apply to pitch
            <span className="ml-2">📣</span>
          </a>
  </div>*/}
        {/*<Newsletter />*/}
      </main>
      <Footer />
    </>
  )
}
