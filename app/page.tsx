import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProofBar } from '@/components/proof-bar'
import { ServicesSection } from '@/components/services-section'
import { PortfolioPreview } from '@/components/portfolio-preview'
import { ProcessPreview } from '@/components/process-preview'
import { PricingPreview } from '@/components/pricing-preview'
import { ReviewsPreview } from '@/components/reviews-preview'
import { FaqPreview } from '@/components/faq-preview'
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

        <PortfolioPreview />
        <ProcessPreview />
        <PricingPreview />
        <ReviewsPreview />
        <FaqPreview />

        <FinalCta />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}