export declare class IoCContainer {
    private static instance;
    private registrations;
    private constructor();
    static getInstance(): IoCContainer;
    register<T>(name: string, type: {
        new (...args: any[]): T;
    }): void;
    resolve<T>(name: string, ...args: any[]): T;
}
