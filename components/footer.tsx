import Icon from "./icon";

export default function Footer({ isDark = false }: { isDark?: boolean }) {
  return (
    <footer className={`p-10 lg:px-16 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <a href="#" className="text-[10px] leading-5 text-[#888] mr-[20px]">
        Privacy Notice
      </a>
      <a href="#" className="text-[10px] leading-5 text-[#888]">
        Terms of use
      </a>
      <p className="text-[10px] my-3 leading-5 text-[#888] max-w-[460px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        voluptate officiis veritatis vitae dolor ullam dignissimos nihil placeat
        quisquam ducimus odit amet dolores, ut pariatur voluptas dolorum
        voluptatem quas. Dolorum?
      </p>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.instagram.com/asty_ua" className="text-[#888] hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Icon name="instagram" />
          </a>
          <a href="https://www.facebook.com/asty.ukraine" className="text-[#888] hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Icon name="facebook" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-[10px] leading-5 text-[#888]">
            © { new Date().getFullYear() } ASTY, INC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
