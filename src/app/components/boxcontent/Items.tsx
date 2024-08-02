import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import Image from "next/image";

const Items: NextPage<{ product: any }> = ({ product }) => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-row flex-wrap justify-between gap-x-[20px] gap-y-[20px]">
                {product?.map((e: any, index: number) => (
                    <Link key={index} href={`/page/details/${e._id}`}>
                        <div className="flex flex-col items-center p-[5px] min-w-[300px] max-w-[300px] border-[1px] border-[#ccc] rounded-[5px] py-[30px]">
                            <Image width={200} height={200} src={e.image} alt="" />
                            <h1 className="text-[16px] text-center mt-[10px] min-h-[80px] border-b-[1px] border-b-[#ccc]">
                                {e.name}
                            </h1>
                            <p className="font-[600] text-red-500 mt-[10px]">Giá: {e.price}đ</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Items;
