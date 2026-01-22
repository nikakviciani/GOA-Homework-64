import Header from './Header';

// 11) App.jsx-ში შექმენით isLoggedIn ცვლადი ( (true ან false).
// - გადასცით props-ად Header კომპონენტს
// - Header-იდან Nav კომპონენტს
// - Nav-იდან User კომპონენტს

// User კომპონენტში:
return isLoggedIn ? "Hello User" : "Please log in to your account";
// - თუ isLoggedIn === true → დააბრუნეთ "Hello User"
// - სხვა შემთხვევაში → "Please log in to your account"
function App() {
    const isLoggedIn = true; // or false
    return <Header isLoggedIn={isLoggedIn} />;
}

export default App;