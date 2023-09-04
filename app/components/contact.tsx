export default function Contact() {
  return (
    <div className="bg-[#1a1a1a] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-3xl max-w-[250px] tracking-wide mb-14">
            Get in touch with us
          </h2>
          <h4 className="text-[#666] font-light text-sm">General Inquiries:</h4>
          <a href="#" className="text-white font-light text-sm">
            info@asty.com.ua
          </a>
          <p className="text-[#666] font-light max-w-[350px] mt-16">
            We are ready to lead you into the exciting world of architecture and
            interior design.
          </p>
          <div className="mt-14 flex">
            <a
              href="#"
              className="border border-white px-16 py-4 text-xs tracking-wider font-medium text-white hover:text-black hover:bg-white"
            >
              SEND REQUEST
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}