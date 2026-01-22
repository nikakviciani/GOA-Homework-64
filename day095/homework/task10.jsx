import Parent from './Parent';
// 10) App.jsx-ში შექმენით handleClick ფუნქცია.
// - გადასცით props-ად Parent კომპონენტს
// - Parent კომპონენტში გამოიძახეთ Child კომპონენტი
// - Child კომპონენტში ღილაკზე დაჭერისას გამოიძახეთ props-ით მიღებული handleClick ფუნქცია
// App.jsx

function App() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return <Parent handleClick={handleClick} />;
}

export default App;