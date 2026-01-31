// 3) App.jsx-ში შექმენით ფორმა ორი input-ით:
// - username (uncontrolled)
// - password (controlled)
// password-ისთვის გამოიყენეთ useState.
// კომენტარებში დაწერეთ რომელი input არის controlled და რომელი uncontrolled და რატომ

function App() {
  const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
  return (
    <form>
        {/* username არის uncontrolled რადგან მისი მნიშვნელობა არ კონტროლდება React-ის state-ით */}
        <input type="text" name="username" placeholder="Username" />
        {/* password არის controlled რადგან მისი მნიშვნელობა კონტროლდება React-ის state-ით */}
        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
    </form>
  );
}