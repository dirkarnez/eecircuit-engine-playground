import { Simulation } from "./eecircuit-engine";

const simulation = new Simulation();
await simulation.start();

const module = await import("./load-line.js");
await module.setSimulation(simulation);