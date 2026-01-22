// 6) შექმენით Wrapper კომპონენტი, რომელიც გამოიყენებს props.children-ს.
//    Wrapper კომპონენტმა უნდა დააბრუნოს div რომელშიც ჩაირენდერება children.
//    App კომპონენტში Wrapper-ის შიგნით მოათავსეთ:
//    - სათაური
//    - პარაგრაფი
//    - ღილაკი
function Wrapper(props){
    return <div>{props.children}</div>;
}
function App() {
    return (
        <Wrapper>
            <h1>სათაური</h1>
            <p>ეს არის პარაგრაფი.</p>
            <button>დააჭირე აქ</button>
        </Wrapper>
    );
}