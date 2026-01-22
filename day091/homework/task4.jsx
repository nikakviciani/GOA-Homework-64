// 5) შექმენით Card კომპონენტი, რომელიც მიიღებს props-ით title და description. კომპონენტში გამოიტანეთ title <h2>-ში და description <p>-ში. App.jsx-ში გამოიყენეთ Card კომპონენტი და გადაეცით ნებისმიერი მნიშვნელობები
function Card(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}