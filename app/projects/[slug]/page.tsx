import Footer from '@/components/footer'
import Hero from '@/app/projects/[slug]/components/hero'
import About from '@/app/projects/[slug]/components/about'
import Planning from '@/app/projects/[slug]/components/planning'
import Images from '@/app/projects/[slug]/components/images'

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