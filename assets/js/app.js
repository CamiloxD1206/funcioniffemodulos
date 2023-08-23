// //funcion iife

// import { altura, apellido, usuario } from "../modulos/modulo";

// (function(){
//     const nombre ="Camilo";
//     const apellido ="Salazar";
//     console.log(nombre,apellido);
// })

// ();

// //------------------------------------------
// (function(){
//     const nombre ="Wilman";
//     const apellido ="Rodriguez";
//     console.log(nombre,apellido);
  
// })

// ();
//--------------
//  const nombre ="Cristian";
//  const apellido ="Narvaez";
// console.log(nombre,apellido);

// import { nombre,apellido,altura} from '/assets/modulos/modulo.js';

// console.log(nombre,apellido);
// console.log(altura);
//--------------------------
// import { nombre,apellido,usuario } from '../modulos/modulo.js'

// console.log(usuario(nombre,apellido));
//------------------------------------------
// import { moteros } from '../modulos/modulo.js'
//--------------------------------
// moteros.forEach(element=>{
//     console.log(element);
// })
//-declarartiva-----------------------
// const traermoteros=(id)=>{
// return moteros.find((motos)=>{
//         if(motos.id===id){
//             return motos
//         };

//     });
// };
// console.table(traermoteros(1));
//no-------------------------
//  const traermoteros=(id)=>{
//     return moteros.find((motos)=>motos.id===id)
//     };
//     console.table(traermoteros(1));
    //noo-------------------------------
    // const traermoteros=(id)=>moteros.find((motos)=>motos.id===id)
    // console.table(traermoteros(1));
    //--------------------
//por nombre-filter
    // const traermoteros=(nombre)=>{
    //     return moteros.filter((z)=>z.nombre===nombre)
    //     };
    //     console.table(traermoteros('Camilo'));
//---------------------------------
// const traermoteros=(nombre)=>{
        //     return moteros.find((z)=>z.nombre===nombre)
        //     };
        //     console.table(traermoteros('Camilo'));
//-------------------------------------------------
// let nombre=prompt('Escribe el nombre');
// const traermoteros=(nombre)=>{
//     return moteros.filter((z)=>z.nombre===nombre)
//     };
//     console.table(traermoteros(nombre));
