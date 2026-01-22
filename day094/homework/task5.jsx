// 6) შექმენით RandomDog კომპონენტი. კომპონენტის ჩატვირთვისას useEffect-ის გამოყენებით წამოიღეთ შემთხვევითი ძაღლის სურათი API-დან და გამოიტანეთ <img> ელემენტში
// https://dog.ceo/api/breeds/image/random

const RandomDog = () => {   
    const [dogImage, setDogImage] = useState("");

    useEffect(() => {   //არ შეიძლება await-ის გამოყენება useEffect-ში პირდაპირ ამიტომ ვიყენებთ .then()
        fetchDogImage();
    }, []); // dependency array ცარიელია, რადგან ეს ეფექტი მხოლოდ ერთხელ უნდა შესრულდეს კომპონენტის ჩატვირთვისას


        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setDogImage(data.message))
            .catch((error) => console.error("Error fetching dog image:", error));


    return (
        <div>
            <img src={dogImage} alt="Random Dog" />
        </div>
    );
};