import { ConfigurationManager } from "./ConfigurationManager";

export class IoCContainer {
  private static instance: IoCContainer;
  private registrations = new Map<string, { new (...args: any[]): any }>();

  private constructor() {}

  public static getInstance(): IoCContainer {
    if (!IoCContainer.instance) {
      IoCContainer.instance = new IoCContainer();
    }
    return IoCContainer.instance;
  }

  public register<T>(name: string, type: { new (...args: any[]): T }): void {
    this.registrations.set(name, type);
  }

  public resolve<T>(name: string, ...args: any[]): T {
    const Type = this.registrations.get(name);
    if (!Type) {
      throw new Error(`No registration for ${name}`);
    }
    const config = args || ConfigurationManager.getConfig(name) || {};
    return new Type(config);
  }
}
