// 12) შექმენით WindowResize კომპონენტი.
// გამოიყენეთ useState და useEffect.

// დავალება:
// - შექმენით მდგომარეობა windowWidth, რომლის საწყისი მნიშვნელობა იქნება window.innerWidth
// - შექმენით handleResize ფუნქცია, რომელიც განაახლებს windowWidth მდგომარეობას
// - useEffect-ში დაამატეთ resize eventListener
// - useEffect-ის cleanup ფუნქციის გამოყენებით წაშალეთ eventListener

// ეკრანზე გამოიტანეთ მიმდინარე ეკრანის სიგანე.

// კომენტარებში ახსენით:
// - რატომ არის resize eventListener გვერდითი ეფექტი (side effect)
// - როდის იძახება cleanup ფუნქცია
// - რა პრობლემა შეიძლება წარმოიშვას cleanup-ის გარეშე

import { useState, useEffect } from 'react';

export default function WindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {       
        window.addEventListener('resize', handleResize);                                                                                                                        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <p>Current window width: {windowWidth}px</p>
        </div>
    );
}