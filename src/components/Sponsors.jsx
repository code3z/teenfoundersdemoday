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
import gc from '@/images/logos/gc.png'

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
  <div className="flex flex-col items-center justify-center space-y-4 font-bold text-indigo-200">
    {children}
  </div>
)
export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl">
          Attended by incredible investors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
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
            <Image src={logo1517} height={100} width={100} />
            <div>1517 Fund</div>
          </VC>
          <VC>
            <Image src={foundation} height={100} width={100} />
            <div>Foundation Capital</div>
          </VC>
          <VC>
            <Image src={gc} height={40} width={40}></Image>
            <div>Roughdraft by General Catalyst</div>
          </VC>
        </div>
        <div className="mt-8 text-center font-bold text-indigo-50">
          + Many More
        </div>
      </Container>
    </section>
  )
}
