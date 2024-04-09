"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationManager = void 0;
const Blockchains_1 = require("./Blockchains");
const fs_1 = __importDefault(require("fs"));
class ConfigurationManager {
    static setBlockchainConfiguration(filePath) {
        try {
            // Assuming the file is a JSON
            const rawData = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
            const configs = JSON.parse(rawData);
            for (const [blockchainName, config] of Object.entries(configs)) {
                if (!Blockchains_1.Blockchains.hasOwnProperty(blockchainName)) {
                    console.warn(`Warning: No registration for '${blockchainName}'. This configuration will be ignored.`);
                    continue;
                }
                ConfigurationManager.setConfig(blockchainName, config);
            }
        }
        catch (error) {
            throw new Error(`Failed to load configurations from file: ${error}`);
        }
    }
    static setConfig(blockchainName, config) {
        if (!Blockchains_1.Blockchains.hasOwnProperty(blockchainName)) {
            throw new Error(`No registration for ${blockchainName}`);
        }
        ConfigurationManager.configs.set(blockchainName, config);
    }
    static getConfig(blockchainName) {
        if (!Blockchains_1.Blockchains.hasOwnProperty(blockchainName)) {
            throw new Error(`No registration for ${blockchainName}`);
        }
        return ConfigurationManager.configs.get(blockchainName);
    }
}
exports.ConfigurationManager = ConfigurationManager;
ConfigurationManager.configs = new Map();
