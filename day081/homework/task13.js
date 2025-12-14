// 14) შექმენით class SmartWashingMachine რომელიც WashingMachine-სგან იღებს მემკვიდრეობას და ამატებს quickWash() მეთოდს
class SmartWashingMachine extends WashingMachine {
    quickWash() {
        // Try common start(duration) API
        if (typeof this.start === 'function') {
            try { return this.start(15); } catch (e) { /* fallback below */ }
        }
        // Try common wash(settings) API
        if (typeof this.wash === 'function') {
            return this.wash({ mode: 'quick', duration: 15 });
        }
        // Fallback behavior
        this.mode = 'quick';
        this.duration = 15;
        if (typeof this.run === 'function') return this.run();
        throw new Error('Quick wash not supported by base WashingMachine');
    }
}