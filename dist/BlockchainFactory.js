"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const IoCContainer_1 = require("./IoCContainer");
const Blockchains_1 = require("./Blockchains");
const rgb_package_1 = require("rgb-package");
const container = IoCContainer_1.IoCContainer.getInstance();
exports.container = container;
container.register(Blockchains_1.Blockchains.RGB, rgb_package_1.Rgb);
