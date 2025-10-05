// 1) ვებგვერდზე მომხმარებელს prompt-ის გამოყენებით შემოტანინეთ თაივსი გამოცდისა და აქტიურობის ქულები, შემდეგ გარდაქმენით ისინი რიცხვებად Numbert ან ParseInt ფუნქციების გამოყენებით, შემდეგ შეკრიბეთ და შეამოწმეთ თუ როემლ კატეროგიაში მოხვდა ეს ქულა, რის მიხედვითაც გამოუტანთ მოსწავლეს შეფასბეას

// -A 90-100
// -B 80-90
// -C 70-80
// -D 50-70
// -E 30-50
// F <30

let englishexam = prompt("Enter your English exam score:");
let mathexam = prompt("Enter your Math exam score:");
let georgianexam = prompt("Enter your Georgian exam score:");

function calculateGrade(englishexam, mathexam, georgianexam) {
    let totalScore = Number(englishexam) + Number(mathexam) + Number(georgianexam);
    let grade;
    if (totalScore >= 90) {
        grade = "A";
    } else if (totalScore >= 80) {
        grade = "B";
    } else if (totalScore >= 70) {
        grade = "C";
    } else if (totalScore >= 50) {
        grade = "D";
    } else if (totalScore >= 30) {
        grade = "E";
    } else {
        grade = "F";
    }
    return grade;
}
console.log(calculateGrade())