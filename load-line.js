
// (async () => {
//     const sim = new window["EEcircuit-engine"].Simulation();
//     await sim.start();
//     const netlist = `Basic RLC circuit 
//     .include modelcard.CMOS90

import { Simulation } from "./eecircuit-engine";

//     r vdd 2 100.0
//     l vdd 2 1
//     c vdd 2 0.01
//     m1 2 1 0 0 N90 W=100.0u L=0.09u
//     vdd vdd 0 1.8

//     vin 1 0 0 pulse (0 1.8 0 0.1 0.1 15 30)
//     .tran 0.1 5

//     .end`;

//     sim.setNetList(netlist);
//     const result = await sim.runSim();
//     console.log(result);
// })();

// `
// .title KiCad schematic
// .model __D1 D
// .save all
// .probe alli
// .probe p(D1)
// .probe p(R1)
// D1 +5V Net-_D1-K_ __D1
// R1 Net-_D1-K_ GND 200
// .end
// `


//@ts-check
/**
 * @param {Simulation} simulation
 */
export async function setSimulation(simulation) {
    simulation.setNetList(`Basic RLC circuit 
.include modelcard.CMOS90

r vdd 2 100.0
l vdd 2 1
c vdd 2 0.01
m1 2 1 0 0 N90 W=100.0u L=0.09u
vdd vdd 0 1.8

vin 1 0 0 pulse (0 1.8 0 0.1 0.1 15 30)
.tran 0.1 5

.end`);
    const result = await simulation.runSim();
    console.log(result);
} 