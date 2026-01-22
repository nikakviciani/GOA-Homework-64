import { useState } from 'react';

// 9) შექმენით მდგომარეობა isLightMode (საწყისი მნიშვნელობა false).
export default function Task9() {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div style={{ background: isLightMode ? 'white' : 'black', height: '100vh' }}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}
// - შექმენით toggleTheme ფუნქცია
// - ღილაკზე დაჭერისას შეცვალეთ isLightMode
// - თუ isLightMode === false → background შავი
// - თუ true → background თეთრი
// გამოიყენეთ ternary operator და style ატრიბუტი
