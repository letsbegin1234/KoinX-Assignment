"use client";
import { useEffect, useState } from 'react';
import { Triangle } from 'lucide-react';
const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await response.json();

                setTrendingCoins(data.coins);
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);

    const topThreeTrendingCoins = trendingCoins.slice(0, 3);

    return (
        <div>

            <div className="flex flex-col gap-3 p-5 bg-white rounded-lg mt-10">
                <h1 className="font-bold text-2xl mb-5">Trending Coins (24h)</h1>
                <div className='w-full space-y-4'>
                    {topThreeTrendingCoins.map((coin) => (

                        <div key={coin.item.id} className="flex items-center gap-1 justify-between">

                            <div className='flex items-center gap-4'>
                                <img className="w-8 rounded-xl" src={coin.item.small} alt={coin.item.name} />
                                <p className='text-md'>{coin.item.name} ({coin.item.symbol})</p>

                            </div>
                            <button className="min-w-20 px-1 py-1 text-xs  flex justify-center items-center w-fit text-green-700 rounded-lg gap-2 ml-4 bg-[#EBF9F4]" ><Triangle size={13} fill='green' color='green' />{coin?.item.data.price_change_percentage_24h.usd.toFixed(2)}%</button>


                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingCoins;
