"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "../page/redux/store";
import Image from "next/image";

const Header = () => {
    const cart = useAppSelector((e) => e.cart.cart);
    return (
        <header className="pb-6 bg-black lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <Image
                                width={80}
                                height={80}
                                src="https://cms.vietnamreport.net//source/LogoBusiness/202106081228543.thegioididong.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <Link href="/page/home">
                        <button
                            type="button"
                            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        >
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>

                            <svg
                                className="hidden w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </Link>
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <Link
                            href="/page/home"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300"
                        >
                            {" "}
                            Trang chủ{" "}
                        </Link>

                        <Link
                            href="/page/store"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300"
                        >
                            {" "}
                            Sản phẩm{" "}
                        </Link>
                        <Link
                            href="/page/contact"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300"
                        >
                            {" "}
                            Liên hệ{" "}
                        </Link>

                        <Link
                            href="/page/showroom"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300"
                        >
                            {" "}
                            Showroom{" "}
                        </Link>
                        <Link
                            href="/page/cart"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300 flex flex-row items-center"
                        >
                            {" "}
                            Giỏ hàng:{" "}
                            <span className="block w-[30px] ml-[10px]">
                                {cart.reduce((acc: any, cur: any) => acc + cur.quantity, 0)}
                            </span>
                        </Link>
                        <Link
                            href="/page/user"
                            title=""
                            className="text-base font-medium text-[#fff] transition-all duration-200 hover:text-stone-300 focus:text-stone-300"
                        >
                            Tài khoản
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
