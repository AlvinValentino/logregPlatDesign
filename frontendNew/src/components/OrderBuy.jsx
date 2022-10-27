import React from 'react'

const OrderBuy = ({ menu }) => {

    if(menu === "All orders") {
         return (
            <div>
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
         )
    }         

    if(menu ==="Waiting") {
 return (
    <div>
    <section>
        <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
            <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                <div className="desktop:w-[1200px] flex justify-between">
                    <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[15px] h-[15px] mt-[3px] text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                        <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                    </div>
                    <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                        <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                        <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                    <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                    <div className="flex justify-between">
                        <div className="px-5 w-[586px] h-[149px]">
                            <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                            <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                            <div className="flex flex-row">
                                <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                            </div>
                        </div>
                        <div className="w-[360px] h-[149px] text-end">
                            <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                            <p className="font-regular text-[24px]">$55.00</p>
                            <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
            <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                <div className="desktop:w-[1200px] flex justify-between">
                    <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[15px] h-[15px] mt-[3px] text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                        <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                    </div>
                    <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                        <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                        <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                    <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                    <div className="flex justify-between">
                        <div className="px-5 w-[586px] h-[149px]">
                            <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                            <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                            <div className="flex flex-row">
                                <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                            </div>
                        </div>
                        <div className="w-[360px] h-[149px] text-end">
                            <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                            <p className="font-regular text-[24px]">$55.00</p>
                            <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
 )
    }

    if(menu === "In process") {
        return (
            <div>
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }

    if(menu === "Succeed") {
        return (
            <div>
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px] ml-5">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px] ml-5">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment details</button>
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px] ml-5">Rate Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }

   if(menu === "Cancelled") {
    return (
        <div>
        <section>
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                    <div className="desktop:w-[1200px] flex justify-between">
                        <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                            <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                        </div>
                        <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                            <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                        </div>
                    </div>
                </div>
    
                <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                    <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                        <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                        <div className="flex justify-between">
                            <div className="px-5 w-[586px] h-[149px]">
                                <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                <div className="flex flex-row">
                                    <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                    <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                </div>
                            </div>
                            <div className="w-[360px] h-[149px] text-end">
                                <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                <p className="font-regular text-[24px]">$55.00</p>
                                <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                    <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Reorder</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                    <div className="desktop:w-[1200px] flex justify-between">
                        <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Payment Due</p>
                            <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                        </div>
                        <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                            <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                        </div>
                    </div>
                </div>
    
                <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                    <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                        <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                        <div className="flex justify-between">
                            <div className="px-5 w-[586px] h-[149px]">
                                <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                <div className="flex flex-row">
                                    <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                    <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                </div>
                            </div>
                            <div className="w-[360px] h-[149px] text-end">
                                <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                <p className="font-regular text-[24px]">$55.00</p>
                                <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                    <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Reorder</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
                <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                    <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                        <div className="desktop:w-[1200px] flex justify-between">
                            <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                                <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                            </div>
                            <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                                <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                                <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                        <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                            <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                            <div className="flex justify-between">
                                <div className="px-5 w-[586px] h-[149px]">
                                    <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                    <p className="font-medium text-[14px] text-gray-500 mt-3">Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant.</p>
                                    <div className="flex flex-row">
                                        <img src="/assets/check.svg" className="desktop:w-[22px] desktop:h-[20px] mt-3" alt="" />
                                        <p className="font-semibold text-[18px] mt-2 mx-2">John Doe</p>
                                    </div>
                                </div>
                                <div className="w-[360px] h-[149px] text-end">
                                    <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                    <p className="font-regular text-[24px]">$55.00</p>
                                    <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                        <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Reorder</button>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )

   }

   return null;
}

export default OrderBuy