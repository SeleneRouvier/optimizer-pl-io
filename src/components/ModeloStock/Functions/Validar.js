import React from "react";

function validar(variables) {
    for (const prop in variables) {
      if (variables[prop].length === 0) return <h3>Modelo incompleto</h3>;

      if (prop === 'costoAlm' || prop === 'costoPrep' || prop === 'costoProd' || prop === 'costoPropioMercaderia' || prop === 'costoAgotamiento' || prop === 'tiempoTotal') {
        variables[prop] = Number(variables[prop]);
      } else {
        variables[prop] = parseInt(variables[prop]);
      }

      if (Number.isNaN(variables[prop])) return <h3>No pueden existir valores no numéricos</h3>;
      if (variables[prop] < 0) return <h3>No pueden existir números negativos</h3>;
    }

    return true;
  }

export default validar;