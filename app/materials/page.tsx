"use client"
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
        <button
      onClick={() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-50 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl"
    >
      Skip to bottom ↓
    </button>
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}