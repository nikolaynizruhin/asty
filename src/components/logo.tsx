import Image from "next/image";

export default function Logo({ isDark = false }: { isDark?: boolean }) {
  return <Image src={isDark ? '/images/logo-dark.svg' : '/images/logo-light.svg'} alt="Logo" width="797" height="236" className="h-10 md:h-12 xl:h-14 w-auto" />
}
