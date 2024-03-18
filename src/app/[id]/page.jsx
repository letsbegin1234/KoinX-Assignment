
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import Navbar from "@/components/Navbar";
// Define Coin component
export default function Coin({ params }) {
    // Extract coin ID from URL params
    const coinId = params?.id;
    const [symbol, setSymbol] = useState("");
    // Define state to hold coin data and error flag
    const [coinData, setCoinData] = useState(null);
    const [error, setError] = useState(false);
    const [details, setDetails] = useState(null);
    // Fetch coin data from Coingecko API on component mount
    useEffect(() => {
        // Function to fetch coin data

        const fetchCoinData = async () => {
            try {
                // Fetch coin data from Coingecko API
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
                // Set coin data in state
                setCoinData(response.data);

                setDetails(response.data);
                setSymbol(response.data.symbol.toUpperCase())
            } catch (error) {
                // Set error flag to true
                setError(true);
                console.error("Error fetching coin data:", error);
            }
        };

        // Call fetchCoinData function
        fetchCoinData();
    }, [coinId]); // Dependency array ensures useEffect runs when coinId changes

    // Render coin data and price chart
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />

            {
                error ? (
                    <div className="text-center mt-4 text-red-500" >
                        <p>No data related to {coinId}</p>
                    </div>
                ) : (
                    <>
                        <div className="p-8">
                            <h1 className="font-medium text-2xl mb-6">Data of  {coinId}</h1>


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mb-4'>

                                <div className='grid gap-6 w-full'>
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>{coinId} Price</p>
                                        <p>${isNaN(details?.market_data.current_price.usd) ? 'N/A' : details?.market_data.current_price.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>24h Low / 24h High</p>
                                        <p>${isNaN(details?.market_data.low_24h.usd) ? 'N/A' : details?.market_data.low_24h.usd} / ${isNaN(details?.market_data.high_24h.usd) ? 'N/A' : details?.market_data.high_24h.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>7d Low / 7d High</p>
                                        <p>${isNaN(details?.market_data.low_24h.usd) ? 'N/A' : details?.market_data.low_24h.usd} / ${isNaN(details?.market_data.high_24h.usd) ? 'N/A' : details?.market_data.high_24h.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>Trading Volume</p>
                                        <p>${isNaN(details?.market_data.total_volume.usd) ? 'N/A' : details?.market_data.total_volume.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>Market Cap Rank</p>
                                        <p>#{details?.market_cap_rank}</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className=' grid gap-6 w-full'>
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'> Market Cap</p>
                                        <p>${isNaN(details?.market_data.market_cap.usd) ? 'N/A' : details?.market_data.market_cap.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>Market Cap Dominance</p>
                                        <p>{isNaN(details?.market_data.market_cap_change_percentage_24h_in_currency.usd) ? 'N/A' : details?.market_data.market_cap_change_percentage_24h_in_currency.usd}%</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <p className='text-[#768395]'>Volume / Market Cap</p>
                                        <p>{isNaN(details?.market_data.total_volume.usd / details?.market_data.market_cap.usd) ? 'N/A' : details?.market_data.total_volume.usd / details?.market_data.market_cap.usd}</p>
                                    </div>
                                    <hr />
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#768395]'>All-Time High</p>

                                        <div className='flex flex-col items-end'>
                                            <div className='flex gap-1'>
                                                <div>${isNaN(details?.market_data.ath.usd) ? 'N/A' : details?.market_data.ath.usd}</div>

                                            </div>
                                            <div>{details?.market_data.ath_date.usd ? new Date(details?.market_data.ath_date.usd).toLocaleDateString() : 'N/A'} (about 1 year)</div>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#768395]'>All-Time Low</p>

                                        <div className='flex flex-col items-end'>
                                            <div className='flex gap-1'>
                                                <div>${isNaN(details?.market_data.atl.usd) ? 'N/A' : details?.market_data.atl.usd}</div>

                                            </div>
                                            <div>{details?.market_data.atl_date.usd ? new Date(details?.market_data.atl_date.usd).toLocaleDateString() : 'N/A'} (about 1 year)</div>
                                        </div>

                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div ></div>

                            <div className=" w-11/12 md:w-7/12 mx-auto h-96">
                                {symbol}

                                {symbol && <Chart symbol={`BITSTAMP:${symbol}USD`} />}
                            </div>
                        </div>
                    </>
                )}


        </>

    );
}
