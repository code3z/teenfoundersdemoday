import Image from 'next/image'
import { Container } from '@/components/Container'
import eric from '@/images/avatars/eric.jpeg'
import zach from '@/images/avatars/zach.jpeg'
import pranjali from '@/images/avatars/pranjali.jpeg'
import gabriel from '@/images/avatars/gabriel.webp'
import tejas from '@/images/avatars/tejas.jpeg'
import clsx from 'clsx'

const founders = [
  {
    name: 'Zach Laberge',
    age: 17,
    company: 'Frenter: Infrastructure for the equipment rental industry',
    image: zach,
  },
  {
    name: 'Pranjali Awasthi',
    age: 16,
    company: 'Delv: AI-powered search platform for enterprise-level R&D',
    image: pranjali,
    className: 'object-top',
  },
  {
    name: 'Eric Zhu',
    company: 'Aviato: Search engine for startups',
    age: 15,
    image: eric,
  },
  /*{
    name: 'Gabriel Romualdo',
    company: 'Challenger',
    age: 17,
    image: gabriel,
  },*/
  {
    name: 'Tejas Ravishankar',
    company: 'Dimension: The first developer experience platform',
    age: 16,
    image: tejas,
    className: 'object-top',
  },
]
export function Speakers() {
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="sticky top-0 z-50 mx-auto w-full -translate-x-0.5 bg-gray-900 px-1 py-8 lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-primary sm:text-5xl"
          >
            Who&apos;s pitching?
          </h2>
          <p className="mt-4 max-w-2xl font-display text-2xl tracking-tight text-primary-light">
            These are just a few of the awesome teens pitching.
          </p>
          <div className="absolute -bottom-6 h-6 w-full bg-gradient-to-b from-gray-900 via-gray-900" />
        </div>

        <div className="mx-0.5 mt-8">
          {founders.map((founder) => (
            <div
              className="my-6 grid items-center rounded-4xl border-4 border-gray-800 bg-gray-800 sm:h-96 sm:grid-cols-[1fr_2fr] sm:gap-16"
              key={founder.name}
            >
              <Image
                className={clsx(
                  'h-full max-h-96 rounded-4xl object-cover',
                  founder.className
                )}
                src={founder.image}
                alt=""
                priority
                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="mb-8 px-4">
                <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-slate-100">
                  {founder.name}
                </h3>
                <p className="mt-1 text-lg  tracking-tight text-slate-300">
                  {founder.company}
                </p>
                <p className="mt-1 text-lg tracking-tight text-slate-400">
                  {founder.age} years old
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
