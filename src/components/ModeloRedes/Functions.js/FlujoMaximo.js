const jsgraphs = require('js-graph-algorithms');

const cantNodos = 5;
const aristas = [[0, 1, 5], [0, 2, 5], [1, 2, 5], [1, 3, 5], [2, 3, 5]];


function flujoMaximo(cantidadNodos, aristas, source, target) {
    const g = new jsgraphs.FlowNetwork(cantidadNodos);

    aristas.forEach(arista => {
        g.addEdge(new jsgraphs.FlowEdge(arista[0], arista[1], arista[2]));
    });

    const ff = new jsgraphs.FordFulkerson(g, source, target);
    console.log('max-flow: ' + ff.value);

    const minCut = ff.minCut(g);

    for (var i = 0; i < minCut.length; ++i) {
        const e = minCut[i];
        console.log('min-cut: (' + e.from() + ", " + e.to() + ')');
    }

    return 0;
}

flujoMaximo(cantNodos, aristas, 0, 3);

