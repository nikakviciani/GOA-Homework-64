// 9) შექმენით Layout კომპონენტი props.children-ის გამოყენებით.
//     Layout-ში დაამატეთ header და footer.
//     App კომპონენტში Layout-ის შიგნით განათავსეთ მთავარი კონტენტი
//     // (მაგ: სათაური და ტექსტი).

function loyout(props) {
    return (
        <div>
            <header>
                <h2>Header</h2>
            </header>
            {props.children}
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );}
