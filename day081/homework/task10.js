// 11) შექმენით class SmartAnimal რომელიც Animal-სგან იღებს მემკვიდრეობას და ამატებს intelligenceLevel ველს და describe() მეთოდს
class SmartAnimal extends Animal {
    constructor(...args) {
        let intelligenceLevel = 0;
        if (args.length && typeof args[args.length - 1] === 'number') {
            intelligenceLevel = args.pop();
        }
        super(...args);
        this.intelligenceLevel = intelligenceLevel;
    }

    describe() {
        const base = typeof super.describe === 'function'
            ? super.describe()
            : (this.name || this.species || 'Animal');
        return `${base} (intelligenceLevel: ${this.intelligenceLevel})`;
    }
}