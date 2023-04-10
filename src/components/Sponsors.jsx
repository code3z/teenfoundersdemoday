import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logo1517 from '@/images/logos/1517.svg'
import nightVentures from '@/images/logos/nightventures.svg'
import riefVentures from '@/images/logos/rief.png'
import foundation from '@/images/logos/foundation.svg'
import gc from '@/images/logos/gc2.svg'
import goldman from '@/images/logos/goldman.svg'
import a16z from '@/images/logos/a16z.svg'
import serena from '@/images/logos/serena.webp'
import council from '@/images/logos/council.png'
import pear from '@/images/logos/pear.svg'
import drive from '@/images/logos/drive.png'
import waterbridge from '@/images/logos/waterbridge.svg'
import vol1 from '@/images/logos/vol1.jpg'

const vcs = [
  {
    name: 'Night Ventures',
    logo: 'https://cdn.night.co/ventures/images/logos/night-ventures.svg',
    width: 250,
  },
  {
    name: 'Rief Ventures',
    logo: 'https://d2gn4xht817m0g.cloudfront.net/rfunds/51-original?1601685469',
  },
  { name: 'StaticKit', logo: logoStaticKit },
  { name: 'Mirage', logo: logoMirage },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Statamic', logo: logoStatamic },
]

const VC = ({ children }) => (
  <div className="flex flex-col items-center justify-center space-y-4 whitespace-nowrap font-bold text-indigo-300">
    {children}
  </div>
)
export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-slate-300 py-20 sm:mx-16 sm:rounded-5xl sm:py-32"
    >
      <Container className="">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter sm:text-5xl">
          Attended by incredible investors
        </h2>
        <div className="mx-auto mt-20 flex max-w-2xl grid-cols-1 flex-wrap place-content-center gap-y-12 gap-x-32 md:gap-x-16 lg:gap-x-32">
          {/*  <VC>
            <Image
              src={riefVentures}
              height={100}
              width={60}
              className="rounded-full grayscale"
            />
            <div>Rief Ventures</div>
          </VC>
          <VC>
            <Image src={nightVentures} height={100} width={100} />
            <div>Night Ventures</div>
  </VC>*/}
          <VC>
            <Image src={goldman} height={120} width={120} />
          </VC>
          <VC>
            <Image src={a16z} height={120} width={120} />
          </VC>
          <VC>
            <Image src={council} height={120} width={120} />
          </VC>
          {/*  <VC>
            <Image src={serena} height={200} width={200} className="" />
            <div>Serena Ventures</div>
          </VC>
          <VC>
            <Image src={gc} height={60} width={60}></Image>
            <div>General Catalyst</div>
</VC>*/}
          <VC>
            <Image src={logo1517} height={120} width={120} />
          </VC>
          <VC>
            <Image src={pear} height={120} width={120} />
          </VC>
          <VC>
            <Image src={drive} height={120} width={120} />
          </VC>
          <VC>
            <Image
              src={waterbridge}
              height={150}
              width={150}
              className="invert"
            />
          </VC>
          <Image
            src={vol1}
            height={150}
            width={150}
            className="rounded-md bg-black px-2"
          />

          {/*   <VC>
            <Image src={foundation} height={100} width={100} />
            <div>Foundation Capital</div>
</VC>*/}
        </div>
        <div className="mt-8 text-center font-bold text-gray-600">
          + Cory Levy, Dave Fontenot, and many more
        </div>
      </Container>
    </section>
  )
}
