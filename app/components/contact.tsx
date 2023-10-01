export default function Contact() {
  return (
    <div className="bg-[#1a1a1a] py-20 xl:py-32">
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-[26px] font-semibold text-white md:text-[34px] max-w-[250px] tracking-wide mb-12 xl:mb-14">
            Get in touch with us
          </h2>
          <h4 className="text-[#666] font-light text-sm">General Inquiries:</h4>
          <a href="#" className="text-white font-light text-sm">
            info@asty.com.ua
          </a>
          <p className="text-[#666] font-light max-w-[350px] mt-11 xl:mt-16">
            We are ready to lead you into the exciting world of architecture and
            interior design.
          </p>
          <div className="mt-8 xl:mt-14 flex">
            <a
              href="#"
              className="border border-white py-3 px-10 md:px-8 xl:px-16 xl:py-4 text-xs tracking-wider font-medium text-white hover:text-black hover:bg-white"
            >
              SEND REQUEST
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}