import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import eric from '@/images/avatars/eric.jpeg'

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="relative sticky top-0 z-50 mx-auto w-full -translate-x-0.5 bg-gray-900 px-1 pt-8 lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl"
          >
            Who's pitching?
          </h2>
          <p className="mt-4 max-w-2xl font-display text-2xl tracking-tight text-primary-light">
            Here's 3 of the awesome teens pitching.
          </p>
          <div className="absolute -bottom-12 h-12 w-full bg-gradient-to-b from-gray-900 via-gray-900" />
        </div>

        <div>
          <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
            <Image
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
              src={'speaker.image'}
              alt=""
              priority
              sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
              name
            </h3>
            <p className="mt-1 text-base tracking-tight text-slate-500">role</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
