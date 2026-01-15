import { useState} from 'react';

// useEfect - მაშინ გაიშვება როცა dependency array-ში მოცემული მნიშვნელობა შეიცვლება
// თუ მაგალითად count შეიცვლება, useEffect-ის callback ფუნქცია გაიშვება და არ მოხდება სხვა შემთხვევებში
// render happens
//  1.კომპონენტის ჩატვირთვისას
//  2.მდგობების ცვლილებისას

// მოკლედ რომ ჩამოვაყალიბოთ  useEffect გვჭირდება იმისთვის რომ რაღაც კონკრეტული კოდის ბლოკი ერთზე მეტჯერ არ გაიშვას
// მაგალითად API request-ის გაგზავნა ან კონსოლში რაღაცის დაბეჭდვა როცა კონკრეტული state შეიცვლება

// 2) აიღეთ 3 ღილაკი: Users, Posts, Comments. თითეულზე დაჭერისას შესაბამისი ტექსტით უნდა განახლდეს აქამდე შექმნილი dataType მდგომარეობის მნიშვნლობა setter ფუნქციით (onClick-ის მოვლენის დროს გამოიძახებთ arrow ფუნქციის საშვალებით) შესაბამისად: users, posts, comments. თქვენ უნდა გამოიყენოთ useEffect კაუჭი რომ მონაცემების წამოღება api-დან მოხდეს მხოლოდ dataType მდგომარეობის შეცვლისას, მონაცემები პრიდაპირ დაარენდერეთ
// https://jsonplaceholder.typicode.com/
const [count, setCount] = useState();

function app(){
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
    .then((response) => response.json())
    .then((json) => console.log(json));



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
}