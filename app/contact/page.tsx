import { SiteHeader } from '@/components/site-header'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function ContactPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}