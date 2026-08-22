import { NextResponse, type NextRequest } from "next/server"
import { categories } from "@/lib/definitions"
import projects from "@/lib/fixtures"

// The project and category pages read their params inside <Suspense> so their
// shells can be prefetched, which means a `notFound()` there streams too late
// to set a status. Unknown paths are rejected here instead, before rendering.
const slugs = new Set(projects.map((project) => project.slug))

function isKnown(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean)

  if (segments[0] === "projects") {
    return (
      segments.length === 1 ||
      (segments.length === 2 &&
        (categories as readonly string[]).includes(segments[1]))
    )
  }

  if (segments[0] === "project") {
    return segments.length === 2 && slugs.has(segments[1])
  }

  return true
}

export function proxy(request: NextRequest) {
  if (!isKnown(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL("/_not-found", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/project/:path*", "/projects", "/projects/:path*"],
}
