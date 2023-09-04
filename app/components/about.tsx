export default function About() {
  return (
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
  )
}