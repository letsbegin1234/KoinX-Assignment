

"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import logo1 from '../../public/bitcoin.png';
import { Triangle, ChevronDoubleRightIcon } from 'lucide-react';
import Chart from "./BitcoinPriceChart";
import Start from "./Start";
import Top3TrendCoins from "./Top3TrendCoins";

const BitcoinPrice = () => {
    const [price, setPrice] = useState(null);
    const [change, setChange] = useState(null);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
                );
                const data = await response.json();

                setPrice(data.bitcoin);
                setChange(data.bitcoin.usd_24h_change);
            } catch (error) {

                console.error('Error fetching Bitcoin price:', error);
            }
        };

        fetchBitcoinPrice();
    }, []);

    return (
        <>
            <div className='pt-20 bg-[#EFF2F5] text-black'>
                <div className='flex px-10 md:px-10 items-center mb-5 gap-1'><p className='text-[#546A77]'>CryptoCurrencies </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#546A77]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg> Bitcoin</div>


                <div className='px-5 md:px-10 grid  grid-cols-10 gap-0 md:gap-10 '>
                    <div className="flext flex-col col-span-10 md:col-span-7 h-fit rounded-lg">
                        <div className="rounded-lg bg-white p-4 md:p-10 flex flex-col gap-6">

                            <div className="flex gap-2 items-center mb-7">


                                <Image
                                    src={logo1}
                                    width={30}
                                    height={30}
                                    alt="Picture of the author"
                                />
                                <h1 className="text-2xl">Bitcoin</h1>
                                <h3 className="text-[#61677A] ">BTC</h3>

                                <button className="px-2 py-2 text-xs text-white rounded-lg ml-4 bg-[#61677A]">Rank #1</button>
                            </div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg md:text-3xl">  ${price?.usd.toFixed(2)}</p>



                                </div>
                                <div>
                                    <button className="px-3 py-1 w-fit text-sm  flex  items-center w-fit text-green-700 rounded-lg gap-1 ml-4 bg-[#EBF9F4]" ><Triangle size={10} fill='green' color='green' />{change?.toFixed(2)}%</button>
                                </div>
                                <div>
                                    <p className='text-[#A9B1BD]'>
                                        (24H)
                                    </p>
                                </div>


                            </div>

                            <div className="mb-1">
                                <p className="text-md">₹{price?.inr.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div>
                                <p className='font-semibold'>Bitcoin Price Chart (USD) </p>
                            </div>
                            <div className="w-full mx-auto h-[70vh]">
                                <Chart />
                            </div>
                        </div>







                    </div>
                    <div className='col-span-10 md:col-span-3'>
                        <Start />
                        <Top3TrendCoins />
                    </div>
                </div>
            </div>

        </>
    );
};


export default BitcoinPrice;

