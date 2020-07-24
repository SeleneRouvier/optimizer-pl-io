let activities = {
    "A1": {
      "id": "A1",
      "optimisticTime": 3,
      "mostLikelyTime": 5,
      "pessimisticTime": 7,
      "predecessors": []
    },
    "A2": {
      "id": "A2",
      "optimisticTime": 2,
      "mostLikelyTime": 4,
      "pessimisticTime": 6,
      "predecessors": ["A1"]
    },
    "A3": {
      "id": "A3",
      "optimisticTime": 5,
      "mostLikelyTime": 8,
      "pessimisticTime": 11,
      "predecessors": ["A1"]
    },
    "A4": {
      "id": "A4",
      "optimisticTime": 7,
      "mostLikelyTime": 9,
      "pessimisticTime": 12,
      "predecessors": ["A2"]
    },
    "A5": {
      "id": "A5",
      "optimisticTime": 6,
      "mostLikelyTime": 8,
      "pessimisticTime": 10,
      "predecessors": ["A2","A3"]
    },
    "A6": {
      "id": "A6",
      "optimisticTime": 4,
      "mostLikelyTime": 6,
      "pessimisticTime": 9,
      "predecessors": ["A5"]
    },
    "A7": {
      "id": "A7",
      "optimisticTime": 2,
      "mostLikelyTime": 3,
      "pessimisticTime": 5,
      "predecessors": ["A4","A6"]
    }
}

function diagramaDeRed(){

}

function diagramaDeFlechas(){

}

function diagramaDePotenciales(activities){
  const pert = jsPERT.default(activities);
  console.log(JSON.stringify(pert));
}

function matrizDePrecedencia(TablaPrededencia){

}

const jsPERT = require('js-pert');
const pert = jsPERT.default(activities);
console.log(JSON.stringify(pert));