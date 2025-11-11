import cuzcuz from "../assets/mercadorias/cuzcuz.png";
import ovos from "../assets/mercadorias/ovo.png";
import macarrao from "../assets/mercadorias/macarrao.png";
import leite from "../assets/mercadorias/leite.png";

export const products = [
  {
    id: 1,
    title: "CUZCUZ - Flocão Nordestino",
    produto: cuzcuz,
    quantidade: Number(15),
    quantbase: Number(20),
 
  },

  {
    id: 2,
    title: "Ovo - Cartéla",
    produto: ovos,
    quantidade: 60,
    quantbase:  120,

  },
  {
    id: 3,
    title: "Macarrão - Vilma",
    produto: macarrao,
    quantidade: 20,
    quantbase: 20,
    
  },

  {
    id: 4,
    title: "Leite em pó - LaSerenissima",
    produto: leite,
    quantidade: 23,
    quantbase: 25,
   
  },
];
