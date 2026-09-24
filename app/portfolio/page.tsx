import { SiteHeader } from '@/components/site-header'
import { GallerySection } from '@/components/gallery-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function PortfolioPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <GallerySection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
