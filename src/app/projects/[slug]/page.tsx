import Footer from '@/src/components/footer'
import Hero from '@/src/app/projects/[slug]/components/hero'
import About from '@/src/app/projects/[slug]/components/about'
import Planning from '@/src/app/projects/[slug]/components/planning'
import Images from '@/src/app/projects/[slug]/components/images'

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <>
      <Hero />
      <About />
      <Planning />
      <Images />
      <Footer isDark />
    </>
  )
}