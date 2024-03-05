import app from "@/config/app"
import company from "@/config/company"

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: app.name,
  legalName: company.name,
  description: 'ASTY – архітектурно-дизайнерське бюро, яке працює в сфері дизайну інтер’єру та архітектури по всьому світі',
  logo: app.url + '/images/logo-dark.svg',
  url: app.url,
  sameAs: [company.instagram, company.facebook],
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressCountry: company.address.country,
    postalCode: company.address.postal,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email
  }
}

export default function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
}
