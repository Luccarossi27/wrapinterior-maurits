import { SiteHeader } from '@/components/site-header'
import { ReviewsSection } from '@/components/reviews-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'

export default function ReviewsPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <ReviewsSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}