// 13) შექმენით class AdvancedTriangle რომელიც Triangle-სგან იღებს მემკვიდრეობას და ამატებს perimeter() მეთოდს
class AdvancedTriangle extends Triangle {
    perimeter() {
        if (Array.isArray(this.sides)) return this.sides.reduce((s, v) => s + v, 0);
        if (typeof this.getSides === 'function') {
            const s = this.getSides();
            if (Array.isArray(s)) return s.reduce((a, b) => a + b, 0);
        }
        if ('a' in this && 'b' in this && 'c' in this) return this.a + this.b + this.c;
        if ('sideA' in this && 'sideB' in this && 'sideC' in this) return this.sideA + this.sideB + this.sideC;
        throw new Error('Unable to determine triangle sides for perimeter calculation');
    }
}