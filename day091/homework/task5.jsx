// 6) შექმენით Profile კომპონენტი, რომელიც მიიღებს props-ით username მნიშვნელობას და გამოიტანს ტექსტს: "Welcome, username". App.jsx-ში გამოიყენეთ Profile კომპონენტი და გადაეცით თქვენი სახელი
function Profile(props) {
    return <h3>Welcome, {props.username}</h3>; // აქ ჩვენ გამოვიყენებთ props-ის username თვისებას, რათა გამოვიტანოთ ტექსტი <h3> ელემენტში
}