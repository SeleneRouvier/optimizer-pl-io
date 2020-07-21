const jsgraphs = require('js-graph-algorithms');

const cantNodos = 5;
const aristas = [[0, 1, 4000], [0, 2, 5400], [0, 3, 9800], [1, 2, 4300], [1, 3, 6200], [1, 4, 8700], [2, 3, 4800], [2, 4, 7100], [3, 4, 4900]];


function rutaMasCorta(cantidadNodos, aristas) {

    const g = new jsgraphs.WeightedDiGraph(5);

    aristas.forEach(arista => {
        g.addEdge(new jsgraphs.Edge(arista[0], arista[1], arista[2]));
    });

    const dijkstra = new jsgraphs.Dijkstra(g, 0);

    for (var v = 1; v < g.V; ++v) {
        if (dijkstra.hasPathTo(v)) {
            const path = dijkstra.pathTo(v);
            console.log('=====path from 0 to ' + v + ' start==========');
            for (var i = 0; i < path.length; ++i) {
                const e = path[i];
                console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
            }
            console.log('=====path from 0 to ' + v + ' end==========');
            console.log('=====distance: ' + dijkstra.distanceTo(v) + '=========');
            console.log('');
        }
    }
}

rutaMasCorta(cantNodos, aristas);