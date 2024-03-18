export default function Cb({ number }) {
    if (number > 0) {
        return (
            <div> <button className="px-3 py-0.5 w-fit text-xs  flex  items-center w-fit text-green-700 rounded-lg gap-1  bg-[#EBF9F4]">+{number}%</button>
            </div>
        )
    }
    return (
        <div>
            <button className="px-3 py-0.5 w-fit text-xs  h-fit  flex  items-center w-fit text-red-600 rounded-lg gap-1  bg-[#FDF0EE]">{number}%</button>
        </div>
    )
}