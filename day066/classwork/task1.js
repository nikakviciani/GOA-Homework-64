// && ნიშნავს and
// || ნიშნავს or
// ! ნიშნავს not ან 
// 1) შექმენით ლოგიკური ოპერაციების ტესტიერების გვერდი, რომელზეც გექნებათ და ლოგიკური ოპერაცია, უნდა გქონდეთ 2 შესატანი checkbox boolean მნიშვნლობებისთვის, დამადასტურებელი ღილაკი და შედეგის საჩვენებელი პარაგრაფი, ყველა ეს ელემენტი შეინახეთ javascript-ის ცვლლადში და როდესაც მოხდება ღილაკზე დაჭერა მომხამრებლის შემოტანილი მნიშვნელობებს შორის შეასრულეთ და ლოგიკური ოპერაცია და გამოიტანეთ პარაგრაფის შედეგად
function not(){
    const a =document.getElementById('checkbox1').checked;
    if(!a){
        document.getElementById('result1').innerText = 'true';
    }
}
function and(){
    const a =document.getElementById('checkbox2').checked;
    const b =document.getElementById('checkbox3').checked;
    if(a && b){
        document.getElementById('result2').innerText = 'true';
    }
}
function or(){
    const a =document.getElementById('checkbox4').checked;
    const b =document.getElementById('checkbox5').checked;
    if(a || b){
        document.getElementById('result3').innerText = 'true';
    }
}