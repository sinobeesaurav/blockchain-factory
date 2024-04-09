"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
const ConfigurationManager_1 = require("./ConfigurationManager");
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
        const config = args || ConfigurationManager_1.ConfigurationManager.getConfig(name) || {};
        return new Type(config);
    }
}
exports.IoCContainer = IoCContainer;
