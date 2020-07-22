const jsPERT = require('js-pert');

const activities = {
    "A": {
      "id": "A",
      "optimisticTime": 5,
      "mostLikelyTime": 6,
      "pessimisticTime": 7,
      "predecessors": []
    },
    "B": {
      "id": "B",
      "optimisticTime": 1,
      "mostLikelyTime": 3,
      "pessimisticTime": 5,
      "predecessors": []
    },
    "C": {
      "id": "C",
      "optimisticTime": 1,
      "mostLikelyTime": 4,
      "pessimisticTime": 7,
      "predecessors": []
    },
    "D": {
      "id": "D",
      "optimisticTime": 1,
      "mostLikelyTime": 2,
      "pessimisticTime": 3,
      "predecessors": ["A"]
    },
    "E": {
      "id": "E",
      "optimisticTime": 1,
      "mostLikelyTime": 2,
      "pessimisticTime": 9,
      "predecessors": ["B"]
    },
    "F": {
      "id": "F",
      "optimisticTime": 1,
      "mostLikelyTime": 5,
      "pessimisticTime": 9,
      "predecessors": ["C"]
    },
    "G": {
      "id": "G",
      "optimisticTime": 2,
      "mostLikelyTime": 2,
      "pessimisticTime": 8,
      "predecessors": ["C"]
    },
    "H": {
      "id": "H",
      "optimisticTime": 4,
      "mostLikelyTime": 4,
      "pessimisticTime": 10,
      "predecessors": ["E", "F"]
    },
    "I": {
      "id": "I",
      "optimisticTime": 2,
      "mostLikelyTime": 5,
      "pessimisticTime": 8,
      "predecessors": ["D"]
    },
    "J": {
      "id": "J",
      "optimisticTime": 2,
      "mostLikelyTime": 2,
      "pessimisticTime": 8,
      "predecessors": ["H", "G"]
    }
  }
 
const pert = jsPERT.default(activities);
 
console.log('PERT', pert);