// 5) შექმენით WindowResize კომპონენტი. გამოიყენეთ useState და useEffect ეკრანის სიგანის (window.innerWidth) შესანახად. დაამატეთ resize eventListener useEffect-ში და cleanup function-ის გამოყენებით წაშალეთ იგი. კომენტარებით ახსენით როდის იძახება cleanup function
import { useEffect, useState } from "react";

function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Width: {width}px</h2>
        </div>
    );
}