import { use, useState} from 'react';


const [count, setCount] = useState();
// useEffect -ში  callback ფუნქცია არ შეიძლება იყოს ასიქნონური
// useEffect გვჭირდება იმისთვის რომ რაღაც კონკრეტული კოდის ბლოკი ერთზე მეტჯერ არ გაიშვას
useEffect(() => {
    async function app(){
    const respons =await fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
    const inf= respons.json();}



    return (
        <div>
        <button>comments</button>
        <button>posts</button>
        <button>users</button>

        <h2>Data Type: {dataType}</h2>
        <div>
        {data && data.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        ))}
        </div>
        </div>

    )
}, [dataType]);