(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},63:function(e,a,t){e.exports=t(97)},68:function(e,a,t){},69:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(15),c=t.n(i),l=(t(68),t(69),t(16)),s=t(17),o=t(20),u=t(18),m=t(21),p=t(37),d=t(38),h=t(39),f=t(49),E=t(56),v=t.n(E),b=t(51),g=t(52),y=t(30),C=t(50),x=t(40),N=t(27),k=t(44),R=t(46),j=t(45),V=t(48),O=t(31),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).handlerInputVar=function(e){var a=e.target,n=a.value,r=a.name,i=t.props.status.variables;i[r].xi=r,i[r].descripcion=n,r>1&&""===n&&i.splice(r,1),t.props.handleVariables(i),t.handleNewsVar(t.props.status.method)},t.handlerInputRes=function(e){var a=e.target,n=a.value,r=a.name,i=t.props.status.restricciones;i[r].ri=r,i[r].descripcion=n,""===n&&i.splice(r,1),t.props.handleRestricciones(i),t.handleNewsRes()},t.handleNewsRes=function(){var e=t.props.status.restricciones;0===e.filter(function(e){return 0===e.descripcion.length}).length&&(e.push({ri:e.length,descripcion:"",coeficientes:[],eq:">=",derecha:""}),t.props.handleRestricciones(e))},t.handleNewsVar=function(e){var a=t.props.status.variables;"simplex"===e?0===a.filter(function(e){return 0===e.descripcion.length}).length&&(a.push({xi:a.length,descripcion:"",coeficiente:""}),t.props.handleVariables(a)):a.length>2&&(a.splice(2),t.props.handleVariables(a))},t.state={faltaDescrip:""},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"isValidated",value:function(){var e=this.props.status,a=e.variables,t=e.restricciones,n=a.filter(function(e){return""!==e.descripcion}),r=t.filter(function(e){return""!==e.descripcion});return n.length>1&r.length>0?(this.props.lastStep(1),!0):(n<2?this.setState({faltaDescrip:"Dale no seas Guampa poneme como minimo 2 variables"}):this.setState({faltaDescrip:"Poneme Alguna Restri pue "}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.map(function(a,t){return r.a.createElement(b.a,{className:"mt-1",key:"VTD"+t},r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(y.a,{name:"xi",id:"variable"},"X"+t)),r.a.createElement(C.a,{name:t,placeholder:"Descripcion de la Variable","aria-label":"Descripcion","aria-describedby":"variable",onChange:e.handlerInputVar,value:a.descripcion}))}),i=t.map(function(a,t){return r.a.createElement(b.a,{className:"mt-1",key:"RTD"+t},r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(y.a,{name:"ri",id:"restriccion"},"R"+t)),r.a.createElement(C.a,{name:t,placeholder:"Descripcion de la Restriccion","aria-label":"Descripcion","aria-describedby":"restriccion",onChange:e.handlerInputRes,value:a.descripcion}))}),c=r.a.createElement(x.a,null,r.a.createElement(N.a,{onClick:function(){e.props.handleMethod("graph"),e.handleNewsVar("graph")},active:"graph"===this.props.status.method,color:"primary"},"GRAFICO"),r.a.createElement(N.a,{onClick:function(){e.props.handleMethod("simplex"),e.handleNewsVar("simplex")},active:"simplex"===this.props.status.method,color:"primary"},"SIMPLEX")),l=r.a.createElement(x.a,null,r.a.createElement(N.a,{onClick:function(){return e.props.handleObjective("max")},active:"max"===this.props.status.objective,color:"primary"},"Maximizacion"),r.a.createElement(N.a,{onClick:function(){return e.props.handleObjective("min")},active:"min"===this.props.status.objective,color:"primary"},"Minimizacion"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comenzamos Configurando nuestro Modelo:"),r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"mx-auto"},r.a.createElement(R.a,null,"Metodo a Utilizar:"),r.a.createElement(j.a,null,c)),r.a.createElement(k.a,{className:"mx-auto"},r.a.createElement(R.a,null,"Tipo de Optimizacion:"),r.a.createElement(j.a,null,l))),r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"w-100 mt-3"},r.a.createElement(R.a,null,r.a.createElement(V.a,{className:"text-left"},r.a.createElement("h4",null,"Variables:"))),r.a.createElement(j.a,null,n))),r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"w-100 mt-3"},r.a.createElement(R.a,null,r.a.createElement(V.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(j.a,null,i))),""!==this.state.faltaDescrip&&r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(O.a,{className:"mx-auto",color:"danger"},this.state.faltaDescrip))))}}]),a}(r.a.Component),I=function(e){var a=e.restriccion.coeficientes;if(a.length!==e.cantVariables){var t=e.cantVariables-a.length;if(t>0)for(var n=0;n<t;n++)a.push("");else a.splice(e.cantVariables)}var i=e.restriccion.eq,c=r.a.createElement(x.a,{className:"mx-1",key:"Eq"+e.restriccion.ri},r.a.createElement(N.a,{key:"B<s"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i="<="},color:"<="===i?"primary":"secondary",value:"<="},"<="),r.a.createElement(N.a,{key:"B="+e.restriccion.ri,name:"eq",disabled:!0,onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i="="},color:"="===i?"primary":"secondary",value:"="},"="),r.a.createElement(N.a,{key:"B>"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i=">="},color:">="===i?"primary":"secondary",value:">="},">=")),l=a.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{key:"Ci"+e.restriccion.ri+"r"+n,type:"number",name:n,placeholder:"Coefiente",className:"InputCoeficiente",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:t}),r.a.createElement(g.a,{key:"IADD"+e.restriccion.ri+"r"+n,addonType:"append"},r.a.createElement(y.a,{key:"r"+e.restriccion.ri+"r"+n},"X"+n)),n<a.length-1&&r.a.createElement(y.a,{key:"+"+e.restriccion.ri+"r"+n},"+"))});return r.a.createElement(k.a,{key:"RRR"+e.restriccion.ri},r.a.createElement(R.a,{className:"p-0 m-0"},r.a.createElement(V.a,null,"R"+e.restriccion.ri+":"+e.restriccion.descripcion)),r.a.createElement(j.a,{className:"p-0 my-1 mx-auto"},r.a.createElement(b.a,{key:"RT"+e.restriccion.ri},l,c,r.a.createElement(C.a,{key:"C"+e.restriccion.ri+"r"+a.length,type:"number",name:"derecha",placeholder:"Coe",className:"InputCoeficiente","aria-label":"Coe","aria-describedby":"restriccion",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:e.restriccion.derecha}))))},S=t(53),D=function(e){var a=e.variables,t=a.filter(function(e){return""!==e.descripcion}).map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{key:"TTV"+n,target:"IF"+n},"Debes ingresar el coeficiente de "+t.descripcion),r.a.createElement(C.a,{key:"IF"+n,id:"IF"+n,type:"number",name:t.xi,placeholder:"Coef",className:"InputCoeficiente","aria-label":"Coeficiente","aria-describedby":"coe",onChange:function(a){return e.handleCoefVar(a)},value:t.coeficiente}),r.a.createElement(g.a,{key:"ADDIF"+n,addonType:"append"},r.a.createElement(y.a,{key:"IFD"+n},"X"+t.xi)),n<a.filter(function(e){return""!==e.descripcion}).length-1&&r.a.createElement(y.a,{key:"+IF"+n},"+"))});return r.a.createElement(b.a,{key:"INPUTFUNCIONAL"},t,r.a.createElement(y.a,{className:"mx-1",key:"IFOPT"}," => "+e.objective.toUpperCase()))},T=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).handleCoefVar=function(e){var a=e.target,n=a.value,r=a.name;if(n){var i=t.props.status.variables;i[r].coeficiente=parseInt(n),t.props.handleVariables(i),console.log(t.props.status.variables)}},t.handleCoefRes=function(e,a){var n=e.target,r=n.name,i=n.value,c=t.props.status.restricciones;switch(console.log("En la Res:"+a+", en el campo:"+r+",con el valor:"+i),r){case"derecha":c[a].derecha=parseInt(i);break;case"eq":c[a].eq=i;break;default:c[a].coeficientes[r]=parseInt(i)}console.log(c),t.props.handleRestricciones(c)},t.state={faltaCoe:""},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"isValidated",value:function(){return this.props.status.variables.filter(function(e){return""!==e.descripcion}).every(function(e){return""!==e.coeficiente})?(this.props.lastStep(2),this.setState({faltaCoe:""}),!0):(this.setState({faltaCoe:"Rellename pue todos los Coeficientes no seas Guampa"}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.filter(function(e){return""!==e.descripcion}).length,i=t.filter(function(e){return""!==e.descripcion}).map(function(a,t){return r.a.createElement(I,{className:"mt-1",key:"R"+t,handleCoefRes:e.handleCoefRes,cantVariables:n,restriccion:a})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cargamos los datos de nuestro Modelo:"),r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"w-100 mt-3"},r.a.createElement(R.a,null,r.a.createElement(V.a,{className:"text-left"},r.a.createElement("h4",null,"Referencia:"))),r.a.createElement(j.a,null,"Aqui iran las Referencias"))),r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"w-100 mt-3"},r.a.createElement(R.a,null,r.a.createElement(V.a,{className:"text-left"},r.a.createElement("h4",null,"Funcion Objetivo:"))),r.a.createElement(j.a,{className:"mx-auto"},r.a.createElement(D,{variables:a,handleCoefVar:this.handleCoefVar,objective:this.props.status.objective})))),r.a.createElement(d.a,null,r.a.createElement(k.a,{className:"w-100 mt-3"},r.a.createElement(R.a,null,r.a.createElement(V.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(j.a,null,i))),""!==this.state.faltaCoe&&r.a.createElement(d.a,{className:"mt-3"},r.a.createElement(O.a,{className:"mx-auto",color:"danger"},this.state.faltaCoe))))}}]),a}(r.a.Component),F=t(47),P=t(61),M=t.n(P),q=function(e){var a=e.restricciones,t=e.variables,n=e.objective,r={optimize:"coeficiente",opType:"",constraints:{},variables:{}};return r.opType=n,t.filter(function(e){return""!==e.descripcion}).forEach(function(e){var t={};t.coeficiente=e.coeficiente,a.forEach(function(a){""!==a.descripcion&&(t["r"+a.ri]=a.coeficientes[e.xi])}),console.log(t),r.variables[e.xi]=t}),a.filter(function(e){return""!==e.descripcion}).forEach(function(e){if(">="===e.eq){var a={};a.min=e.derecha,r.constraints["r"+e.ri]=a}else{var t={};t.max=e.derecha,r.constraints["r"+e.ri]=t}}),r},B=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).calculatePrimal=function(){var e=q(t.props.status);return M.a.Solve(e)},t.state={result:!1},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e="No hay resultados todavsia";this.props.status.result&&(e=this.calculatePrimal(),console.log(e));var a=this.props.status.variables.filter(function(e){return""!==e.descripcion}).map(function(a){return r.a.createElement(k.a,{key:"Card"+a.xi},r.a.createElement(V.a,null,"Variable: X"+a.xi),r.a.createElement(j.a,null,r.a.createElement(F.a,null,e[a.xi]?"Se recomienda producir "+e[a.xi]+" unidades":"No se recomienda la produccion"," de "+a.descripcion)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(R.a,null,r.a.createElement(V.a,null,r.a.createElement("h3",null,"El resultado optimo es: "+e.result))),r.a.createElement(j.a,null,a)))}}]),a}(r.a.Component),A=t(62),z=t.n(A),X=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).handleRestricciones=function(e){t.setState({restricciones:e})},t.handleVariables=function(e){t.setState({variables:e})},t.handleMethod=function(e){t.setState({method:e})},t.handleObjective=function(e){t.setState({objective:e})},t.handleResult=function(e){t.setState({result:e})},t.lastStep=function(e){2===e?t.setState({result:!0,barProg:100}):t.setState({result:!1,barProg:66})},t.finishButtonClick=function(e){console.log("En algun momento va a imprimir resultados")},t.state={variables:[{xi:0,descripcion:"",coeficiente:""},{xi:1,descripcion:"",coeficiente:""}],restricciones:[{ri:0,descripcion:"",coeficientes:[],eq:">=",derecha:""}],method:"graph",objective:"max",result:!1,barProg:33},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[{stepName:"Configuracion del Modelo",component:w,stepProps:{status:this.state,handleMethod:this.handleMethod,handleVariables:this.handleVariables,handleRestricciones:this.handleRestricciones,lastStep:this.lastStep,handleObjective:this.handleObjective}},{stepName:"Detalles del Modelo",component:T,stepProps:{status:this.state,handleVariables:this.handleVariables,lastStep:this.lastStep,handleRestricciones:this.handleRestricciones}},{stepName:"Presentacion de los Resultados",component:B,stepProps:{status:this.state,handleResult:this.handleResult,lastStep:this.lastStep}}];return r.a.createElement(p.a,{fluid:!0,className:"App"},r.a.createElement(d.a,{className:""},r.a.createElement(h.a,{xs:12,md:6,className:"mx-auto"},r.a.createElement("img",{src:z.a,className:"App-logo",alt:"logo",height:"200"}),r.a.createElement(f.a,{animated:!0,color:"blue",value:this.state.barProg}))),r.a.createElement(d.a,null,r.a.createElement(h.a,{xs:12,md:6,className:"my-4 mx-auto"},r.a.createElement(v.a,{steps:e,title:"Programacion Lineal",progressbar:!0,headerTextCenter:!0,validate:!0,color:"blue",previousButtonText:"Volver",nextButtonText:"Siguiente",finishButtonText:"Imprimir Resultados",finishButtonClick:this.finishButtonClick}))))}}]),a}(r.a.Component);var U=function(){return r.a.createElement(X,null)};t(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.ef941504.chunk.js.map