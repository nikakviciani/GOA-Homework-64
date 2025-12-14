// 15) შექმენით class GamePlayer რომელიც Player-სგან იღებს მემკვიდრეობას და ამატებს level ველს და static resetPlayers() მეთოდს
class GamePlayer extends Player {
    constructor(name, age, level = 1) {
        super(name, age);
        this.level = level;
    }

    static resetPlayers() {
        if (typeof Player.resetPlayers === 'function') {
            Player.resetPlayers();
        } else {
            Player.players = 0;
        }
    }
}