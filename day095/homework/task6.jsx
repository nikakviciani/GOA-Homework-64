import { useState, useEffect } from 'react';

// 6) შექმენით Products კომპონენტი.
// გამოიყენეთ useState და useEffect.

// დავალება:
// - კომპონენტის პირველ render-ზე გააგზავნეთ მოთხოვნა:
// https://fakestoreapi.com/products
// - მიღებული მონაცემები შეინახეთ data მდგომარეობაში (საწყისი მნიშვნელობა [])
// - ეკრანზე გამოიტანეთ პროდუქტები map მეთოდის გამოყენებით
export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setData(products));
    }, []);

    return (
        <div>
            {data.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ))}
        </div>
    );
}