// <!-- 2) ახსენით addEventListener-ის მესამე პარამეტრი თქვენი სიტყვებით დაწერეთ რა ხდება capturing რეჟიმში და რა ხდება bubbling რეჟიმში შემდეგ შექმენით 3 ჩადგმული ელემენტი div → section → button და აჩვენეთ ორივე რეჟიმის მუშაობა -->
// addEventListener-ის მესამე პარამეტრი განსაზღვრავს, თუ როგორ უნდა მოისმინოს მოვლენები - capturing რეჟიმში თუ bubbling რეჟიმში.
// Capturing რეჟიმში, მოვლენები გადიან ელემენტების ხის ზედა ნაწილიდან ქვემოთ, ანუ მშობელ ელემენტებიდან შვილ ელემენტებამდე.
// Bubbling რეჟიმში, მოვლენები გადიან ელემენტების ხის ქვედა ნაწილიდან ზემოთ, ანუ შვილ ელემენტებიდან მშობელ ელემენტებამდე.
let div = document.createElement('div');
div.style.border = '2px solid red';
div.style.padding = '20px';
div.textContent = 'Div Element';

let section = document.createElement('section');
section.style.border = '2px solid green';
section.style.padding = '20px';
section.textContent = 'Section Element';
let button = document.createElement('button');
button.textContent = 'Click Me';
