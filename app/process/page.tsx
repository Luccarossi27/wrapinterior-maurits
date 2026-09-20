import { SiteHeader } from '@/components/site-header'
import { ProcessSection } from '@/components/process-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function ProcessPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <ProcessSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}