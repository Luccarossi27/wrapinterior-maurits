import { SiteHeader } from '@/components/site-header'
import { MaterialsSection } from '@/components/materials-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function MaterialsPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <MaterialsSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}