import Button from "@/src/components/button";

export default function Contact() {
  return (
    <div className="bg-white pt-12 pb-14 md:pb-24 md:pt-36 xl:pb-44 xl:pt-52">
      <div className="mx-auto max-w-[550px] md:max-w-[464px] xl:max-w-4xl px-4 lg:px-8">
        <h2 className="mt-2 text-[28px] font-semibold text-gray-900 md:text-4xl max-w-[300px] tracking-wide">
          Lets talk about your project!
        </h2>
        <p className="text-[#666] font-light max-w-[350px] mt-10 md:mt-14 xl:mt-10 xl:mb-28 text-sm xl:text-base">
          We are ready to lead you into the exciting world of architecture and
          interior design.
        </p>
        <div className="mt-8 md:mt-14 flex">
          <Button href="#">
            SEND REQUEST
          </Button>
        </div>
      </div>
    </div>
  )
}