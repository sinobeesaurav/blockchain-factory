import { IoCContainer } from "./IoCContainer";
import { Blockchains } from "./Blockchains";
import { Rgb } from "rgb-package";

const container = IoCContainer.getInstance();

container.register(Blockchains.RGB, Rgb);

export { container };
