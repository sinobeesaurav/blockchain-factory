import { Blockchains } from "./Blockchains";
import fs from "fs";

class ConfigurationManager {
  private static configs = new Map<string, any>();

  public static setBlockchainConfiguration(filePath: string): void {
    try {
      // Assuming the file is a JSON
      const rawData = fs.readFileSync(filePath, { encoding: "utf-8" });
      const configs = JSON.parse(rawData);

      for (const [blockchainName, config] of Object.entries(configs)) {
        if (!Blockchains.hasOwnProperty(blockchainName)) {
          console.warn(
            `Warning: No registration for '${blockchainName}'. This configuration will be ignored.`
          );
          continue;
        }
        ConfigurationManager.setConfig(blockchainName, config);
      }
    } catch (error) {
      throw new Error(`Failed to load configurations from file: ${error}`);
    }
  }

  private static setConfig(blockchainName: string, config: any): void {
    if (!Blockchains.hasOwnProperty(blockchainName)) {
      throw new Error(`No registration for ${blockchainName}`);
    }
    ConfigurationManager.configs.set(blockchainName, config);
  }

  public static getConfig(blockchainName: string): any {
    if (!Blockchains.hasOwnProperty(blockchainName)) {
      throw new Error(`No registration for ${blockchainName}`);
    }
    return ConfigurationManager.configs.get(blockchainName);
  }
}

export { ConfigurationManager };
