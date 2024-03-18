
"use client";
import { Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import Ab from './Ab';

function CoinDetails() {
    const [details, setDetails] = useState(null);
    useEffect(() => {
        async function fetchCoinDetails() {
            try {

                const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
                const data = await response.json();


                setDetails(data);
            } catch (error) {

                console.error('Error fetching coin details:', error);
            }
        }

        fetchCoinDetails();
    }, []);

    return (

        <div className='p-5 md:p-12 bg-white my-10 rounded-xl'>

            <div>
                <h2 className='font-semibold text-2xl'>Performance</h2>
                <br />
                <div className='grow-0 flex items-center gap-8 '>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm md:text-lg text-[#5B5E70] text-nowrap'>Today's Low</p>
                        <p className='text-sm md:text-xl'>{isNaN(details?.market_data.low_24h.usd) ? 'N/A' : details?.market_data.low_24h.usd.toFixed(2)}</p>
                    </div>
                    <div className='grow bg-gradient-to-r from-red-600 via-yellow-500 to-green-400 rounded-lg h-1.5'></div>
                    <div className='grow-0 flex flex-col items-end gap-1'>
                        <p className='text-sm md:text-lg text-[#5B5E70] text-nowrap'>Today's High</p>
                        <p className='text-sm md:text-xl'>{isNaN(details?.market_data.high_24h.usd) ? 'N/A' : details?.market_data.high_24h.usd.toFixed(2)}</p>
                    </div>
                </div>
                <br />
                <div className='grow-0 flex items-center gap-8 '>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm md:text-lg text-[#5B5E70] text-nowrap'>52W Low</p>
                        <p className='text-sm md:text-xl'>{isNaN(details?.market_data.atl.usd) ? 'N/A' : details?.market_data.atl.usd.toFixed(2)}</p>
                    </div>
                    <div className='grow bg-gradient-to-r from-red-600 via-yellow-500  to-green-400 rounded-lg h-1.5'></div>
                    <div className='grow-0 flex flex-col items-end gap-1'>
                        <p className='text-sm md:text-lg text-[#5B5E70] text-nowrap'>52W High</p>
                        <p className='text-sm md:text-xl'>{isNaN(details?.market_data.ath.usd) ? 'N/A' : details?.market_data.ath.usd.toFixed(2)}</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="flex items-center gap-1">
                    <h1 className="font-medium text-2xl">Fundamentals</h1>
                    <Info size="30" color="white" fill="grey" />
                </div>
                <br />
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div className='grid gap-6 w-full'>
                        <div className='flex justify-between'>
                            <p className='text-[#768395]'>Bitcoin Price</p>
                            <p>${isNaN(details?.market_data.current_price.usd) ? 'N/A' : details?.market_data.current_price.usd}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='text-[#768395]'>24h Low / 24h High</p>
                            <p>${isNaN(details?.market_data.low_24h.usd) ? 'N/A' : details?.market_data.low_24h.usd} / ${isNaN(details?.market_data.high_24h.usd) ? 'N/A' : details.market_data.high_24h.usd}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p className='text-[#768395]'>7d Low / 7d High</p>
                            <p>${isNaN(details?.market_data.low_24h.usd) ? 'N/A' : details?.market_data.low_24h.usd} / ${isNaN(details?.market_data.high_24h.usd) ? 'N/A' : details.market_data.high_24h.usd}</p>
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
                            <p>{isNaN(details?.market_data.total_volume.usd / details?.market_data.market_cap.usd) ? 'N/A' : details?.market_data.total_volume.usd / details.market_data.market_cap.usd}</p>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between'>
                            <p className='text-[#768395]'>All-Time High</p>

                            <div className='flex flex-col items-end'>
                                <div className='flex gap-1'>
                                    <div>${isNaN(details?.market_data.ath.usd) ? 'N/A' : details?.market_data.ath.usd}</div>
                                    <div><Ab number={isNaN(details?.market_data.ath_change_percentage.usd) ? 'N/A' : details?.market_data.ath_change_percentage.usd} /></div>
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
                                    <div><Ab number={isNaN(details?.market_data.atl_change_percentage.usd) ? 'N/A' : details?.market_data.atl_change_percentage.usd} /></div>
                                </div>
                                <div>{details?.market_data.atl_date.usd ? new Date(details?.market_data.atl_date.usd).toLocaleDateString() : 'N/A'} (about 1 year)</div>
                            </div>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CoinDetails;
