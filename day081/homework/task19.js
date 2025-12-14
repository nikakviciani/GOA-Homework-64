// 20) შექმენით car ობიექტის ასლი spread operator-ით და შეცვალეთ მხოლოდ model ველი

const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
const carCopy = { ...car, model: 'Camry' };