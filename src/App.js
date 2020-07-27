import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Inicio from "./components/Inicio";

import LinealProgramming from './components/LinealProgramming';
import InSteps from "./components/LinealProgramming/InSteps";
import SinglePage from "./components/LinealProgramming/SinglePage";

import NoLinealProgramming from "./components/NoLinealProgramming";
import KuhnyTucker from "./components/NoLinealProgramming/KuhnyTucker";

import ModeloRedes from "./components/ModeloRedes";
import ArbolMinimaExpansion from "./components/ModeloRedes/ArbolMinimaExpansion";
import RutaMasCorta from "./components/ModeloRedes/RutaMasCorta";

import ModeloStock2 from "./components/ModeloStock";
import ModeloWilson from "./components/ModeloStock/ModeloWilson";
import Modelo2 from "./components/ModeloStock/Modelo2";
import ModeloTriangular from "./components/ModeloStock/ModeloTriangular";
import ModeloSimpleConAgotamiento from "./components/ModeloStock/ModeloAgotamientoSimple";
import ModeloSimpleSinAgotamientoPorLote from "./components/ModeloStock/ModeloSimpleSinAgotamientoPorLote";

const NoLinealProgrammingPage = () => <NoLinealProgramming />;

const Index = () => <Inicio/>;

const App = () => 
    <Switch>
      <Route exact path="/home" component={Index} />
      <Route exact path="/optimizer-pl-io/" component={Index} />

      <Route exact path="/LinealProgramming" component={LinealProgramming} />
      <Route exact path="/LinealProgramming/InSteps" component={InSteps} />
      <Route exact path="/LinealProgramming/SinglePage" component={SinglePage} />

      <Route exact path="/NoLinealProgramming" component={NoLinealProgrammingPage} />
      <Route exact path="/NoLinealProgramming/Lagrange" component={NoLinealProgrammingPage} />
      <Route exact path="/NoLinealProgramming/Kuhn-Tucker" component={KuhnyTucker} />


      <Route exact path="/ModeloRedes" component={ModeloRedes} />
      <Route exact path="/ModeloRedes/ArbolMinimaExpansion" component={ArbolMinimaExpansion} />
      <Route exact path="/ModeloRedes/RutaMasCorta" component={RutaMasCorta} />


      <Route exact path="/ModeloStock" component={ModeloStock2} />
      <Route exact path="/ModeloStock/ModeloWilson" component={ModeloWilson} /> 
      <Route exact path="/ModeloStock/Modelo2" component={Modelo2} />
      <Route exact path="/ModeloStock/ModeloTriangular" component={ModeloTriangular} /> 
      <Route exact path="/ModeloStock/ModeloSimpleConAgotamiento" component={ModeloSimpleConAgotamiento} /> 
      <Route exact path="/ModeloStock/ModeloSimpleSinAgotamientoPorLote" component={ModeloSimpleSinAgotamientoPorLote} /> 
      <Redirect to="/home" />
    </Switch>;

export default App;
