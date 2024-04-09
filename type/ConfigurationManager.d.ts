declare class ConfigurationManager {
    private static configs;
    static setBlockchainConfiguration(filePath: string): void;
    private static setConfig;
    static getConfig(blockchainName: string): any;
}
export { ConfigurationManager };
