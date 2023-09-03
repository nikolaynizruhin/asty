import Header from '@/app/components/header'
import Footer from '../components/footer'

export default function Projects() {
  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <Header isDark />
        <div className="bg-white py-24 sm:py-56">
          <div className="flex justify-center">
            <h1 className="text-[180px] font-bold tracking-[.25em] leading-none text-black opacity-[0.02] -mr-[.25em]">
              PROJECTS
            </h1>
          </div>
          <div className="text-xs text-[#828282] px-16 mt-11">
            <button className="text-[#121212] mr-24 pr-4">ALL</button>
            <button className="mr-24 pr-4">ARCHITECTURE</button>
            <button className="mr-24 pr-4">RESIDENTAL</button>
            <button>COMMERCIAL</button>
          </div>
          <div className="grid grid-cols-4 gap-[2px] px-16 mt-5">
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/06/View_View010003-1024x751.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/main-02-1024x725.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/mainmainmain-06-1024x724.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/DIAMOND-66-1024x682.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/06/View_View010003-1024x751.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/main-02-1024x725.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/mainmainmain-06-1024x724.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="object-cover h-[232px] w-full"
                src="https://yodezeen.com/wp-content/uploads/2023/04/DIAMOND-66-1024x682.jpg"
                width={325}
                height={232}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* Let's talk */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[300px] tracking-wide">
              Let's talk about your project!
            </h2>
            <p className="text-[#666] font-light max-w-[350px] mt-7 mb-24">
              We are ready to lead you into the exciting world of architecture and
              interior design.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="border border-black bg-white px-16 py-4 text-xs tracking-wider font-medium text-black hover:text-white hover:bg-black"
              >
                SEND REQUEST
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}