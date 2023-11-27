import Icon from "./icon";

export default function Footer({ isDark = false }: { isDark?: boolean }) {
  return (
    <footer className={`font-light ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-[550px] mx-auto md:max-w-none px-4 md:px-8 xl:px-16 lg:pb-9 pb-11">
        <a href="#" className={`text-[10px] tracking-widest ${isDark ? 'text-white opacity-[0.32]' : 'text-[#888]'} mr-[20px]`}>
          Privacy Notice
        </a>
        <a href="#" className={`text-[10px] tracking-widest ${isDark ? 'text-white opacity-[0.32]' : 'text-[#888]'}`}>
          Terms of use
        </a>
        <p className={`text-[10px] my-3 tracking-widest ${isDark ? 'text-white opacity-[0.32]' : 'text-[#888]'} max-w-[460px]`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          voluptate officiis veritatis vitae dolor ullam dignissimos nihil placeat
          quisquam ducimus odit amet dolores, ut pariatur voluptas dolorum
          voluptatem quas. Dolorum?
        </p>
        <div className="md:flex md:items-center md:justify-between text-[#888]">
          <p className="text-[10px] font-light tracking-widest">
            © { new Date().getFullYear() } ASTY, INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="https://www.instagram.com/asty_ua" className="hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Icon name="instagram" />
            </a>
            <a href="https://www.facebook.com/asty.ukraine" className="hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Icon name="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
