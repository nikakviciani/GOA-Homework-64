// 4) შექმენით Button კომპონენტი, რომელიც მიიღებს props-ით buttonText მნიშვნელობას და გამოიტანს <button> ელემენტში. App.jsx-ში გამოიყენეთ Button კომპონენტი ორჯერ სხვადასხვა ტექსტით ("Login", "Register")
function Button(props) {
    // props არის ობიექტი, რომელიც შეიცავს ყველა თვისებას (properties), რომლებიც გადაეცემა კომპონენტს
    return <button>{props.buttonText}</button>; // აქ ჩვენ გამოვიყენებთ props-ის buttonText თვისებას, რათა გამოვიტანოთ ტექსტი <button> ელემენტში
}