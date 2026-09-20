import { SiteHeader } from '@/components/site-header'
import { PricingSection } from '@/components/pricing-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function PricingPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <PricingSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}