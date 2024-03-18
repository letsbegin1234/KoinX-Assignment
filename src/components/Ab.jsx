export default function Ab({ number }) {
    if (number > 0) {
        return (
            <div className="text-green-600"> {number}%
            </div>
        )
    }
    return (
        <div className="text-red-600">
            {number}%
        </div>
    )
}