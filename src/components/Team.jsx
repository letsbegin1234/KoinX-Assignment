
import Image from "next/image";
import logo2 from '../../public/logo2.jpeg';

export default function Team() {
    return (

        <>
            <div className="p-10 bg-white rounded-lg mb-10">
                <h1 className="font-bold text-3xl">Team</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quas corporis vero, id repellendus ratione rerum! Modi, quo eius. Eveniet deleniti ducimus debitis, sapiente voluptatum dignissimos voluptatibus qui veritatis facere.</p>
                <br />
                <div className="grid grid-cols-10 p-5 bg-[#E7F4FD] gap-4 rounded-lg mb-7">
                    <div className="col-span-10 md:col-span-2 flex flex-col items-center gap-2 w-full">
                        <div >
                            <Image
                                src="https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png"
                                width={200}
                                height={500}
                                alt="Picture of the author"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-lg ">Steve Jobs</p>
                            <p className="text-nowrap text-[#788F9B]">Designation here</p></div>

                    </div>

                    <div className="col-span-10 md:col-span-8 flex items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores libero laudantium illum placeat quam est atque similique beatae nobis aliquid error inventore fuga minima voluptates quos, molestias at. Voluptas!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit enim culpa aliquam beatae modi voluptate eum autem illo, consectetur repellat ut fugiat iste perferendis tempore sit quo, nulla ratione.</p>
                    </div>
                </div>
                <div className="grid grid-cols-10 p-5 bg-[#E7F4FD] gap-4 rounded-lg mb-7">
                    <div className="col-span-10 md:col-span-2 flex flex-col items-center gap-2 w-full">
                        <div >
                            <Image
                                src="https://cdn.vox-cdn.com/thumbor/yRXB_rBlDM8rRVgczFVE_TPEf3c=/0x0:3410x2276/1400x1400/filters:focal(1705x1138:1706x1139)/cdn.vox-cdn.com/uploads/chorus_asset/file/6090617/mark-zuckerberg-facebook-512.0.jpg"
                                width={200}
                                height={500}
                                alt="Picture of the author"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-lg ">Mark zuckerberg</p>
                            <p className="text-nowrap text-[#788F9B]">Designation here</p></div>

                    </div>

                    <div className="col-span-10 md:col-span-8 flex items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores libero laudantium illum placeat quam est atque similique beatae nobis aliquid error inventore fuga minima voluptates quos, molestias at. Voluptas!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit enim culpa aliquam beatae modi voluptate eum autem illo, consectetur repellat ut fugiat iste perferendis tempore sit quo, nulla ratione.</p>
                    </div>
                </div>
                <div className="grid grid-cols-10 p-5 bg-[#E7F4FD] gap-4 rounded-lg">
                    <div className="col-span-10 md:col-span-2 flex flex-col items-center gap-2 w-full">
                        <div >
                            <Image
                                src="https://cdn.vox-cdn.com/thumbor/eGXldRD9EVKLS_kAi8j4_3P7qTc=/0x0:640x427/1400x1400/filters:focal(320x214:321x215)/cdn.vox-cdn.com/assets/921440/billgatestock.jpg"
                                width={200}
                                height={500}
                                alt="Picture of the author"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-lg ">Bill Gates</p>
                            <p className="text-nowrap text-[#788F9B]">Designation here</p></div>

                    </div>

                    <div className="col-span-10 md:col-span-8 flex items-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores libero laudantium illum placeat quam est atque similique beatae nobis aliquid error inventore fuga minima voluptates quos, molestias at. Voluptas!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit enim culpa aliquam beatae modi voluptate eum autem illo, consectetur repellat ut fugiat iste perferendis tempore sit quo, nulla ratione.</p>
                    </div>
                </div>

            </div>
        </>
    )
}