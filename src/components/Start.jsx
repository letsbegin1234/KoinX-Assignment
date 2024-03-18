
import Image from "next/image";
import logo2 from '../../public/logo2.jpeg';
export default function Start() {
    return (
        <>
            <div className="w-full text-black rounded-md">

                <div className="w-full bg-[#0052fe] rounded-3xl text-white flex flex-col items-center gap-8 p-10">
                    <div className="text-center flex flex-col   gap-1">
                        <h1 className="text-2xl">Get started with KoinX</h1>
                        <h1 className="text-2xl">for free</h1>
                    </div>

                    <p className="text-center">With our range of features that you can equip for free,KoinX allows you to be more educated and aware of your tax reports</p>
                    <Image
                        src={logo2}
                        width={200}
                        height={500}
                        alt="Picture of the author"
                    />
                    <button className="border-2  px-8 py-2 rounded bg-white flex items-center text-black gap-1"><p>Get Started for free</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </button>
                </div>
            </div>



        </>
    )
}