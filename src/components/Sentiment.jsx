
import { Info } from "lucide-react";
import Cb from './Cb';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function Sentiment() {
    return (
        <>
            <div className=" py-5 bg-white rounded-xl">

                <h1 className="font-bold text-3xl  w-11/12 mx-auto">Sentiment</h1>
                <br />
                <div className="flex gap-1.5 w-11/12 mx-auto items-center">
                    <h1 className="font-medium text-2xl">Key Events</h1>
                    <Info size="30" color="white" fill="grey" />
                </div>
                <br />
                <div className="w-11/12 mx-auto ">
                    <Carousel opts={{
                        align: "start",
                    }}
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex  gap-3 rounded-2xl bg-[#E7F4FD] p-4">
                                    <img className="rounded-3xl h-11 w-11" src=" https://lh3.googleusercontent.com/xF2am6U2DMQpmtuflW1g2iSlghI54-SnKcutT8ESbz_o2v6oGHyzLXWdc8zMyF-w5G98_mP8QB2Xug1AXAVN1sVqyym-2APpO9g43g" />
                                    <div className="flex items-center flex-col gap-2">
                                        <p className="font-medium text-xs md:text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est vel saepe porro deleniti rerum pariatur accusamus velit numquam totam. </p>

                                        <p className="text-xs md:text-normal">Debitis, laudantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo soluta nobis expedita illo distinctio adipisci, error rem, consequuntur sapiente quod, in modi doloribus eaque sint. Dolor laboriosam nihil modi?</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex  bg-[#EBF9F4] rounded-2xl gap-3 p-4">
                                    <img className="rounded-3xl h-11 w-11" src="https://www.travelperk.com/wp-content/uploads/greenperk-arrow.png" />
                                    <div className="flex items-center flex-col gap-2">
                                        <p className="font-medium text-xs md:text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est vel saepe porro deleniti rerum pariatur accusamus velit numquam totam. </p>

                                        <p className="text-xs md:text-normal">Debitis, laudantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo soluta nobis expedita illo distinctio adipisci, error rem, consequuntur sapiente quod, in modi doloribus eaque sint. Dolor laboriosam nihil modi?</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex  bg-[#EBF9F4] rounded-2xl gap-3 p-4">
                                    <img className="rounded-3xl h-11 w-11" src=" https://lh3.googleusercontent.com/xF2am6U2DMQpmtuflW1g2iSlghI54-SnKcutT8ESbz_o2v6oGHyzLXWdc8zMyF-w5G98_mP8QB2Xug1AXAVN1sVqyym-2APpO9g43g" />

                                    <div className="flex items-center flex-col gap-2">
                                        <p className="font-medium text-xs md:text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est vel saepe porro deleniti rerum pariatur accusamus velit numquam totam. </p>
                                        <p className="text-xs md:text-normal">Debitis, laudantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo soluta nobis expedita illo distinctio adipisci, error rem, consequuntur sapiente quod, in modi doloribus eaque sint. Dolor laboriosam nihil modi?</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <br />
                <br />
                <div className=" flex w-11/12 mx-auto items-center gap-1">
                    <h1 className="font-medium text-2xl">Analyst Estimates</h1>
                    <Info size="30" color="white" fill="grey" />
                </div>
                <br />
                <br />
                <div className="flex items-center gap-10 w-11/12 mx-auto">
                    <div className=" rounded-full bg-[#EBF9F4]  text-xl md:text-3xl text-green-600 w-16 md:w-32 h-16 md:h-32 flex items-center justify-center">
                        76%
                    </div>
                    <div className="flex flex-col text-xs md:text-normal gap-3">
                        <div className="flex items-center gap-5">
                            <div className="flex  gap-10 items-center">
                                <h1>Buy</h1>
                                <div className=" w-[16vw] md:w-[40vw] rounded-lg h-1 md:h-2 bg-green-600"></div>
                            </div>
                            <h1>76%</h1>

                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex  gap-10 items-center">
                                <h1>Buy</h1>
                                <div className="w-[4vw] rounded-lg h-1 md:h-2 bg-[#C7C8CE]"></div>
                            </div>
                            <h1>8%</h1>

                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex  gap-10 items-center">
                                <h1>Buy</h1>
                                <div className="w-[8vw] rounded-lg h-1 md:h-2 bg-[#F7314C]"></div>
                            </div>
                            <h1>16%</h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}