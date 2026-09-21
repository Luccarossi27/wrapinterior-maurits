import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProofBar } from '@/components/proof-bar'
import { HomepageServices } from '@/components/homepage-services'
import { HomepageExplore } from '@/components/homepage-explore'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <Hero />
        <ProofBar />
        <HomepageServices />
        <HomepageExplore />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}