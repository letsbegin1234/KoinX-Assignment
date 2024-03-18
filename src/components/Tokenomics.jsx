
import Image from "next/image";
import logo5 from '../../public/logo5.jpeg';

export default function Toke() {
    return (
        <>
            <div className="p-7 bg-white rounded-lg my-10">
                <h1 className="font-bold text-2xl">Tokenomics</h1>
                <br />
                <h1 className="font-semibold text-xl mb-2"> Initial Distribution</h1>
                <div className="flex items-center gap-4">
                    <Image
                        src={logo5}
                        width={200}
                        height={500}
                        alt="Picture of the author"
                        className="w-20 md:w-60"

                    />
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2  items-center">
                            <div className="w-3 md:w-5   h-3 md:h-5 rounded-full bg-[#0082FF] "></div>
                            <p >Crowdsale Investors : 80%</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-3 md:w-5 h-3 md:h-5 rounded-full bg-[#F9A002]"></div>
                            <p>Foundation : 20%</p>
                        </div>
                    </div>


                </div>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, provident! A, repellendus cupiditate? Ipsam, accusamus quam necessitatibus beatae adipisci architecto quaerat ea voluptates impedit facilis eligendi praesentium placeat illum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde in, autem porro ratione, mollitia fuga nostrum quos reiciendis dignissimos nihil veniam maxime? Earum nemo tenetur ipsum totam, ullam minima ut.</p>

            </div>
        </>
    )
}