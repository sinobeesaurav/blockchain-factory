"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
class IoCContainer {
    constructor() {
        this.registrations = new Map();
    }
    static getInstance() {
        if (!IoCContainer.instance) {
            IoCContainer.instance = new IoCContainer();
        }
        return IoCContainer.instance;
    }
    register(name, type) {
        this.registrations.set(name, type);
    }
    resolve(name, ...args) {
        const Type = this.registrations.get(name);
        if (!Type) {
            throw new Error(`No registration for ${name}`);
        }
        return new Type(...args);
    }
}
exports.IoCContainer = IoCContainer;
