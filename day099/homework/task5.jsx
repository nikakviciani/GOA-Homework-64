// 6) შექმენით Button კომპონენტი, რომელიც მიიღებს props-ით onClick ფუნქციას.
// App.jsx-ში გამოიყენეთ ეს ღილაკი uncontrolled input-ის მნიშვნელობის წამოსაღებად.
// კომენტარებში დაწერეთ როგორ ვიღებთ მონაცემს uncontrolled კომპონენტიდან

function Button({ onClick }) {
    return (
        <button onClick={onClick}>Get Username</button>
    );
}