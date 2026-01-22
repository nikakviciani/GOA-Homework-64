// 7) შექმენით Card კომპონენტი, რომელიც მიიღებს props.children-ს.
//    Card კომპონენტს უნდა ჰქონდეს დიზაინი (border, padding).
//    App კომპონენტში შექმენით რამდენიმე Card და შიგნით ჩადეთ
// //    სხვადასხვა JSX ელემენტები (ტექსტი, ღილაკი, პარაგრაფი).
function card(props) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            {props.children}
        </div>
    );
}