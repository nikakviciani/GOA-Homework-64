// 6) შექმენით TailwindContainer და TailwindView კომპონენტები.
//    TailwindView-ში გამოიყენეთ Tailwind CSS კლასები.
//    props-ით მიიღეთ ტექსტი Container-დან.
//    Tailwind კლასებით:
//    - შექმენით card მსგავსი layout
//    - გამოიყენეთ padding, margin, rounded, bg-color
import TailwindView from "./TailwindContainer";
export default function TailwindContainer() {
    const text = "This is a sample card created using Tailwind CSS classes in React.";
    return (
        <TailwindView text={text} />
    )
}