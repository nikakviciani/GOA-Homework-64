// 6) შექმენით ობიექტი tablet, რომელსაც ექნება brand, model და color. დაამატეთ method playMusic(), რომელიც console.log()-ში დაწერს "Playing music...". HTML ღილაკზე <button id="musicBtn">Play Music</button> დაჭერისას გამოიძახეთ playMusic()
const tablet = {
    brand: 'Apple',
    model: 'iPad Pro',
    color: 'Silver',
    playMusic: function() {
        console.log('Playing music...');
    }
};
document.getElementById('musicBtn').onclick = tablet.playMusic.bind(tablet);    