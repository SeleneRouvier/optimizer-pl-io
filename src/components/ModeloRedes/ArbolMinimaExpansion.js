var jsgraphs = require('js-graph-algorithms');

const cantNodos = 5;
const aristas = [[0, 1, 0.5], [1, 2, 0.3], [2, 0, 0.4]];

function arbolExpansionMinima(cantidadNodos, aristas) {
    let g = new jsgraphs.WeightedGraph(cantidadNodos);

    aristas.forEach(arista => {
        g.addEdge(new jsgraphs.Edge(arista[0], arista[1], arista[2]));
    });

    var kruskal = new jsgraphs.KruskalMST(g);
    var mst = kruskal.mst;
    for (var i = 0; i < mst.length; ++i) {
        var e = mst[i];
        var v = e.either();
        var w = e.other(v);
        console.log('(' + v + ', ' + w + '): ' + e.weight);
    }
/*
    var json = [];

    var edges = [];
    mst.forEach(arista => {
        const nuevaArista = {
            id: "e0",
            source: "n0",
            target: "n1"
        }
    });

    {
        "nodes": [
          {
            "id": "n0",
            "label": "A node",
            "x": 0,
            "y": 0,
            "size": 3
          },
          {
            "id": "n1",
            "label": "Another node",
            "x": 3,
            "y": 1,
            "size": 2
          },
          {
            "id": "n2",
            "label": "And a last one",
            "x": 1,
            "y": 3,
            "size": 1
          }
        ],
        "edges": [
          {
            "id": "e0",
            "source": "n0",
            "target": "n1"
          },
          {
            "id": "e1",
            "source": "n1",
            "target": "n2"
          },
          {
            "id": "e2",
            "source": "n2",
            "target": "n0"
          }
        ]
      }

*/
    return 0;
}

arbolExpansionMinima(cantNodos, aristas);

/*
var prim = new jsgraphs.LazyPrimMST(g);
var mst = prim.mst;
for(var i=0; i < mst.length; ++i) {
   var e = mst[i];
   var v = e.either();
   var w = e.other(v);
   console.log('(' + v + ', ' + w + '): ' + e.weight);
}*/

/*
var g = new jsgraphs.WeightedGraph(6);
g.addEdge(new jsgraphs.Edge(0, 1, 1));
g.addEdge(new jsgraphs.Edge(0, 2, 5));
g.addEdge(new jsgraphs.Edge(0, 3, 7));
g.addEdge(new jsgraphs.Edge(0, 4, 9));
g.addEdge(new jsgraphs.Edge(1, 2, 6));
g.addEdge(new jsgraphs.Edge(1, 3, 4));
g.addEdge(new jsgraphs.Edge(1, 4, 3));
g.addEdge(new jsgraphs.Edge(2, 3, 5));
g.addEdge(new jsgraphs.Edge(2, 5, 10));
g.addEdge(new jsgraphs.Edge(3, 4, 8));
g.addEdge(new jsgraphs.Edge(3, 5, 3));

g.node(0).label = '1';
g.node(1).label = '2';
g.node(2).label = '3';
g.node(3).label = '4';
g.node(4).label = '5';
g.node(5).label = '6';
*/
