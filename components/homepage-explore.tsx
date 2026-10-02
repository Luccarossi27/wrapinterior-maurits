'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const links = [
  {
    number: '01',
    title: 'Portfolio',
    description: 'See completed transformations and finishes.',
    href: '/portfolio',
  },
  {
    number: '02',
    title: 'Materials',
    description: 'Explore our range of colours, woodgrains, stone, metals and more.',
    href: '/materials',
  },
  {
    number: '03',
    title: 'Process',
    description: 'See how a project goes from first contact to final finish.',
    href: '/process',
  },
  {
    number: '04',
    title: 'Pricing',
    description: 'Understand typical project costs before getting in touch.',
    href: '/pricing',
  },
  {
    number: '05',
    title: 'Reviews',
    description: 'Read what clients have said about their experience.',
    href: '/reviews',
  },
  {
    number: '06',
    title: 'FAQ',
    description: 'Answers to the questions we hear most often.',
    href: '/faq',
  },
  {
    number: '07',
    title: 'Contact',
    description: 'Send photos of your space and start your enquiry.',
    href: '/contact',
  },
]

export function HomepageExplore() {
  return (
    <section className="border-t border-border bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                Explore Wrap Interior
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-md text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
                Everything you need, in one place.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-paper/65">
                Explore our work, understand the process, see typical pricing,
                and find answers before you get started.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-paper/15">
            {links.map((link, i) => (
              <Reveal key={link.href} delay={0.04 + i * 0.04}>
                <Link
                  href={link.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-paper/15 py-5 transition-colors hover:bg-paper/[0.04] sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:py-6"
                >
                  <span className="font-mono text-xs tracking-[0.12em] text-brass">
                    {link.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-paper sm:text-xl">
                      {link.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-paper/50">
                      {link.description}
                    </p>
                  </div>

                  <ArrowRight className="size-5 text-paper/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brass" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
