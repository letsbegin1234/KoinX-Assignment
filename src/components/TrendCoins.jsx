
"use client";
import { useEffect, useState } from 'react';
import Cb from './Cb';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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


    return (
        <div className='w-full'>

            <div className='w-full mx-auto'>
                <Carousel opts={{
                    align: "start",
                }}
                >
                    <CarouselContent>
                        {trendingCoins.map((coin) => (
                            <CarouselItem className="md:basis-1/3 lg:basis-1/5">

                                <div key={coin.item.id} className="rounded-lg flex flex-col w-full p-3 gap-2 border-2">

                                    <div className="flex gap-2 items-center  w-fit mb-2 ">
                                        <img className="w-7 rounded-xl" src={coin.item.small} alt={coin.item.name} />
                                        <p>{coin.item.symbol}</p>

                                        <Cb number={coin?.item.data.price_change_percentage_24h.usd.toFixed(2)} />
                                    </div>
                                    <div className='font-solid text-xl'>
                                        <p>{coin.item.data?.price}</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <img src={coin.item.data.sparkline}></img>
                                    </div>

                                </div>
                            </CarouselItem>

                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>


    );
};

export default TrendingCoins;
