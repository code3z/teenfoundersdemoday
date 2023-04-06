import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background2.png'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-64 -bottom-14 overflow-hidden bg-gray-900 md:-top-44">
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-gray-800" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-900" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary sm:text-7xl">
            <span className="sr-only">Teen Founder Demo Day - </span>See
            incredible young founders present their startups
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-light">
            <p>
              The next Elon Musk, Paul Graham, and Peter Thiel are already
              working on their first startups. We&apos;ve selected the top 1% of
              teenage founders to demo their innovations.
            </p>
            <p>Get the chance to invest in them this April.</p>
            <div className="my-12 flex items-center space-x-8">
              <Button href="https://lu.ma/aotfdemoday">
                Signup as a VC
                <span className="ml-2">🚀</span>
              </Button>
              <a
                href="https://book.vimcal.com/p/jairelan/aotf"
                className="text-lg text-white hover:underline"
              >
                Apply to pitch
                <span className="ml-2">📣</span>
              </a>
            </div>
          </div>
          <Button
            href="https://lu.ma/aotfdemoday"
            className="mt-10 w-full sm:hidden"
          >
            Sign Up!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Teenage Founders Pitching', '10'],
              ['Capital Previously Raised', '$8.5M+'],
              ['Location', 'Online'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-primary">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
