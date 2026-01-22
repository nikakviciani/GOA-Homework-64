// 4) შექმენით ფუნქცია სახელად caesar_cipher რომელიც მიიღებს ტექსტს და რიცხვს shift, ფუნქციამ უნდა გადაადგილოს მხოლოდ ანბანის ასოები ASCII კოდების მიხედვით. მაგ: "abc", 2 -> "cde". სხვა სიმბოლოები უცვლელი უნდა დარჩეს, გამოიყენეთ ord() და chr() და კომენტარებით ახსენით ალგორითმი
function caesar_cipher(text, shift) {
    let result = ""; // აქ ჩვენ ინიციალიზაციას ვუკეთებთ ცვლადს result, რომელიც შეინახავს საბოლოო შედეგს

    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // ვიღებთ текსტის თითოეულ სიმბოლოსI
        // ვამოწმებთ, არის თუ არა სიმბოლო ანბანის ასო
        if (char.match(/[a-zA-Z]/)) {
            let code = char.charCodeAt(0); // ვიღებთ ASCII კოდს
            let shiftedCode = code + shift; // ვამატებთ shift-ს
            
            // ვამოწმებთ, რომ ASCII კოდი არ გადავიდეს ანბანის საზღვრებს
            if (char >= 'a' && char <= 'z') {
            if (shiftedCode > 'z'.charCodeAt(0)) {
                shiftedCode -= 26; // თუ გადავიდა, ვაკლებთ 26-ს
            }
            } else if (char >= 'A' && char <= 'Z') {
            if (shiftedCode > 'Z'.charCodeAt(0)) {
                shiftedCode -= 26; // თუ გადავიდა, ვაკლებთ 26-ს
            }
            }
            result += String.fromCharCode(shiftedCode); // ვამატებთ შედეგს
        } else {
            result += char; // თუ სიმბოლო არ არის ანბანის, ვამატებთ უცვლელად
        }
        }
        return result; // ვაბრუნებთ საბოლოო შედეგს
    }