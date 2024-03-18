

"use client";
import { useState, useEffect } from 'react';

function About() {
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
        <>
            <div>

                <div className="p-8 bg-white mt-10 rounded-xl">
                    <h1 className="font-bold text-xl mb-3">About Bitcoin</h1>
                    <h1 className="font-bold text-lg mb-1">What is Bitcoin</h1>
                    <p>Bitcoin's price today is US${details?.market_data.current_price.usd}, with a 24-hour trading volume of ${details?.market_data.total_volume.usd} B. BTC is {details?.market_data.
                        price_change_percentage_24h_in_currency.usd}% in the last 24 hours. It is currently {details?.market_data.price_change_percentage_7d_in_currency.usd}% from its 7-day all-time high of ${details?.market_data.ath.usd} and {details?.market_data.atl_change_percentage.usd}% from its 7-day all-time low of ${details?.market_data.atl.usd}. BTC has a circulating supply of 19.24 M BTC and a max supply of {details?.market_data.max_supply} M BTC.</p>
                    <br />
                    <hr></hr>
                    <br />
                    <h1 className="font-bold text-lg mb-1">Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
                        Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>

                    <br />

                    <p>Diam present massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
                        Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
                        Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>

                    <br />

                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                    <br />
                    <h1 className="font-bold text-xl mb-3">Already Holding Bitcoin</h1>
                    <br />
                    <div className="grid grid-cols-1 md:grid-cols-2 text-black rounded gap-10">

                        <div className="w-full bg-gradient-to-r from-[#76EDA4] to-[#1364AD] rounded-lg text-white flex  items-center gap-8 p-5">


                            <div>

                                <img className='h-full rounded-lg' src="https://fintech.global/wp-content/uploads/2022/05/piggybank-sK-ziQvKGsk-unsplash-1-265x198.jpg.webp" />
                            </div>
                            <div className=" flex flex-col h-full justify-center gap-5 ">
                                <h1 className="font-semibold text-lg md:text-xl">Calculate your Profits</h1>


                                <button className="border-2 w-fit text-xs md:text-md px-8 py-2 rounded-lg bg-white flex items-center text-black gap-1"><p className='text-nowrap'>Check Now</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-r from-[#FE9464] to-[#F3423A] rounded-lg text-white flex  items-center gap-8 p-5">


                            <div>
                                <img className='h-full rounded-lg' src="https://fintech.global/wp-content/uploads/2022/05/piggybank-sK-ziQvKGsk-unsplash-1-265x198.jpg.webp" />

                            </div>
                            <div className=" flex flex-col justify-center  gap-5">
                                <h1 className=" text-lg font-semibold md:text-xl">Calculate your tax liability</h1>


                                <button className="border-2 w-fit px-8 py-2 text-xs md:text-md rounded-lg bg-white flex items-center text-black gap-1"><p className='text-nowrap'>Check Now</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default About;
