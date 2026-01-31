// 4) შექმენით PasswordCheck კომპონენტი, რომელიც მიიღებს props-ით password მნიშვნელობას.
// თუ პაროლის სიგრძე ნაკლებია 8-ზე, გამოიტანეთ <p> ტექსტი: "Password must contain 8 characters".
// კომენტარებში ახსენით რატომ არის ამ შემთხვევაში password controlled input
function PasswordCheck({ password }) {
    return (
        <>
            {password.length < 8 && <p>Password must contain 8 characters</p>}
        </>
    );
}