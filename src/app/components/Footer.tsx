import Image from 'next/image'
import React from 'react'

const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-[#000]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Image
            width={80}
            height={80}
            src="https://cms.vietnamreport.net//source/LogoBusiness/202106081228543.thegioididong.png"
            alt=""
          />
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Về chúng tôi
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Điều khoản
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              bảo mật
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Liện hệ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
