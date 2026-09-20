import { SiteHeader } from '@/components/site-header'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function FAQPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <FaqSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}