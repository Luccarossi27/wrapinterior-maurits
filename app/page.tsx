import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProofBar } from '@/components/proof-bar'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { MaterialsSection } from '@/components/materials-section'
import { ProcessSection } from '@/components/process-section'
import { PricingSection } from '@/components/pricing-section'
import { ReviewsSection } from '@/components/reviews-section'
import { FaqSection } from '@/components/faq-section'
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
        <ServicesSection />
        <GallerySection />
        <MaterialsSection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
