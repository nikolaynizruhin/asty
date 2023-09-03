import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gray-900">
        <Header />
        <div className="relative isolate overflow-hidden pt-14">
          <img
            src="https://yodezeen.com/wp-content/uploads/2020/03/1.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
          />
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Catch seafood
                <br />
                restaurant
              </h1>
              <p className="mt-8 font-light text-xs leading-8 text-gray-300 tracking-widest">
                View project
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-8 lg:px-16 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-behance"
              viewBox="0 0 16 16"
            >
              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
            </svg>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="bg-white py-24 sm:py-32">
        <div className="flex justify-center">
          <h1 className="text-[180px] font-bold tracking-[.6em] leading-none text-black opacity-[0.02] -mb-28 -mr-[.6em]">
            ABOUT
          </h1>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[300px] tracking-wide">
              We design every project as a one-off
            </h2>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-sm tracking-wide font-light leading-6 text-[#666] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                  enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                  praesent donec est. Odio penatibus risus viverra tellus varius sit
                  neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                  Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                  sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                  odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
                  diam tincidunt ac cursus in vel. Mauris varius vulputate et
                  ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget.
                  Ultricies tellus felis id dignissim eget. Est augue maecenas risus
                  nulla ultrices congue nunc tortor.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                  odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
                  diam tincidunt ac cursus in vel. Mauris varius vulputate et
                  ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
                  ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href="#"
                className="border border-black bg-white px-16 py-4 text-xs tracking-wider font-medium text-black hover:text-white hover:bg-black"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="mx-auto grid auto-rows-fr grid-cols-1 lg:max-w-none lg:grid-cols-3">
        <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
          <img
            src="https://yodezeen.com/wp-content/uploads/2020/03/1-1024x682.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
          />
          <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
            <a href="#">Commercial</a>
          </h3>
          <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
            INTERIOR DESIGN
          </h5>
        </div>
        <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
          <img
            src="https://yodezeen.com/wp-content/uploads/2020/03/DIAMOND-19-2880x1920-1-1024x683.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
          />
          <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
            <a href="#">Residental</a>
          </h3>
          <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
            INTERIOR DESIGN
          </h5>
        </div>
        <div className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 py-96">
          <img
            src="https://yodezeen.com/wp-content/uploads/2020/03/cam_01_View09-1024x640.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.3]"
          />
          <h3 className="text-4xl text-center font-medium leading-10 text-white tracking-wide">
            <a href="#">Architecture</a>
          </h3>
          <h5 className="text-center text-white font-extralight tracking-[.5em] text-xs">
            INTERIOR DESIGN
          </h5>
        </div>
      </div>
      {/* Feature */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="pl-[50%]">
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-xs tracking-wide">
              Our strengths
            </h2>
            <p className="mt-6 text-sm tracking-wide font-light leading-6 text-[#666]">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
              In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-36 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col relative">
                <div className="absolute font-bold text-[180px] text-black opacity-[0.02] -left-24 -top-24 -z-10">
                  4
                </div>
                <dt className="flex items-center gap-x-3 text-sm font-medium leading-4 text-gray-900">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                  </svg>
                  4<br />
                  Offices for find us easily
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-sm tracking-wide font-light leading-6 text-[#666]">
                    Commodo nec sagittis tortor mauris sed. Turpis tortor quis
                    scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
                    volutpat eu. Phasellus praesent ligula sit faucibus.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col relative">
                <div className="absolute font-bold text-[180px] text-black opacity-[0.02] -left-24 -top-24 -z-10">
                  50
                </div>
                <dt className="flex items-center gap-x-3 text-sm font-medium leading-4 text-gray-900">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  50
                  <br />
                  Integral Parts of our Company
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-sm tracking-wide font-light leading-6 text-[#666]">
                    Pellentesque enim a commodo malesuada turpis eleifend risus.
                    Facilisis donec placerat sapien consequat tempor fermentum nibh.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col relative">
                <div className="absolute font-bold text-[180px] text-black opacity-[0.02] -left-24 -top-24 -z-10">
                  600
                </div>
                <dt className="flex items-center gap-x-3 text-sm font-medium leading-4 text-gray-900">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  60
                  <br />
                  Unique Projects Finished
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-sm tracking-wide font-light leading-6 text-[#666]">
                    Pellentesque sit elit congue ante nec amet. Dolor aenean
                    curabitur viverra suspendisse iaculis eget. Nec mollis placerat
                    ultricies euismod ut condimentum.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* Career */}
      <div className="bg-white py-24 sm:py-32">
        <div className="flex justify-center">
          <h1 className="text-[180px] font-bold tracking-[.6em] leading-none text-black opacity-[0.02] -mb-28 -mr-[.6em]">
            CAREER
          </h1>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[300px] tracking-wide">
              A big day to join our team
            </h2>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-sm tracking-wide font-light leading-6 text-[#666] lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                  enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                  praesent donec est. Odio penatibus risus viverra tellus varius sit
                  neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                  Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                  sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                  odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
                  diam tincidunt ac cursus in vel. Mauris varius vulputate et
                  ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget.
                  Ultricies tellus felis id dignissim eget. Est augue maecenas risus
                  nulla ultrices congue nunc tortor.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                  odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
                  diam tincidunt ac cursus in vel. Mauris varius vulputate et
                  ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
                  ut.{" "}
                  <strong className="text-gray-900">
                    Product designer, Architect, HR.
                  </strong>
                </p>
              </div>
            </div>
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
      {/* Contuct Us */}
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
      {/* Footer */}
      <Footer isDark />
    </>
  )
}
