// 6) შექმენით TailwindContainer და TailwindView კომპონენტები.
//    TailwindView-ში გამოიყენეთ Tailwind CSS კლასები.
//    props-ით მიიღეთ ტექსტი Container-დან.
//    Tailwind კლასებით:
//    - შექმენით card მსგავსი layout
//    - გამოიყენეთ padding, margin, rounded, bg-color

export default function TailwindView({ text }) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 p-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Tailwind Card</h2>
                <p className="text-gray-700">{text}</p>
            </div>
        </div>
    )
}