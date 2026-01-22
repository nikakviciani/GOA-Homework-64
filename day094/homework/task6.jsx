import { useState, useEffect } from 'react';

// 8) შექმენით CountryInfo კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით input ველი, სადაც მომხმარებელი ჩაწერს ქვეყნის კოდს (მაგ: ge, us, fr). useEffect-ის გამოყენებით წამოიღეთ ქვეყნის ინფორმაცია API-დან მხოლოდ მაშინ, როცა input-ის მნიშვნელობა შეიცვლება და გამოიტანეთ ქვეყნის სახელი და რეგიონი

// https://restcountries.com/v3.1/alpha/{code}
export default function CountryInfo() {
    const [code, setCode] = useState('');
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {       
        if (!code.trim()) {
            setCountry(null);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                setCountry({
                    name: data[0].name.common,
                    region: data[0].region
                });
                setLoading(false);
            })
            .catch(err => {
                setError('Country not found');
                setCountry(null);
                setLoading(false);
            });
    }, [code]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter country code (e.g., ge, us, fr)"
                value={code}
                onChange={e => setCode(e.target.value.toLowerCase())}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {country && (
                <div>
                    <p>Name: {country.name}</p>
                    <p>Region: {country.region}</p>
                </div>
            )}
        </div>
    );
}