import { io } from "next/cache"

// Marks the route as having intentional request-time work so `generateMetadata`
// is allowed to read `searchParams` for the noindex guard. Renders nothing.
// Must stay inside <Suspense> or the whole page becomes blocking.
// See: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime
export default async function DynamicMarker() {
  await io()

  return null
}
