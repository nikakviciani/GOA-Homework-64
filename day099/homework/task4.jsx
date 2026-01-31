// 5) შექმენით LoginForm კომპონენტი, სადაც:
// - username იქნება uncontrolled input
// - password იქნება controlled input
// password-ის ცვლილებაზე მოახდინეთ ვალიდაცია useEffect-ის გამოყენებით.
// კომენტარებში ახსენით რატომ ჯობს პაროლის კონტროლი state-ით
function LoginForm(){
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
}