// 19) შექმენით ობიექტი movie და გამოიყენეთ rest operator რომ year და country მოხვდეს details ობიექტში

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    country: "USA",
    details: {}
};

const { year, country, ...details } = movie;
movie.details = details;