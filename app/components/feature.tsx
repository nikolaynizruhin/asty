export default function Feature() {
  return (
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
  )
}