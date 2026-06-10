[eecircuit-engine-playground](https://dirkarnez.github.io/eecircuit-engine-playground)
======================================================================================
[eelab-dev/EEcircuit-engine: Simulation engine for EEcircuit](https://github.com/eelab-dev/EEcircuit-engine)

### UMD
```js
const sim = new window["EEcircuit-engine"].Simulation();
await sim.start();
const netlist = `Basic RLC circuit 
.include modelcard.CMOS90

r vdd 2 100.0
l vdd 2 1
c vdd 2 0.01
m1 2 1 0 0 N90 W=100.0u L=0.09u
vdd vdd 0 1.8

vin 1 0 0 pulse (0 1.8 0 0.1 0.1 15 30)
.tran 0.1 5

.end`;
sim.setNetList(netlist);
const result = await sim.runSim();
console.log(result);
```

### ESM
```js
```
### My fork
- [dirkarnez/EEcircuit-engine](https://github.com/dirkarnez/EEcircuit-engine)

### TODOs
- [ ] OpenVAF
- [ ] add Z3

### Instances
- [ ] Load line (diode)
- [ ] 