import Button from "@/components/button";

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[300px] tracking-wide">
            Lets talk about your project!
          </h2>
          <p className="text-[#666] font-light max-w-[350px] mt-7 mb-24">
            We are ready to lead you into the exciting world of architecture and
            interior design.
          </p>
          <div className="mt-10 flex">
            <Button href="#">
              SEND REQUEST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}