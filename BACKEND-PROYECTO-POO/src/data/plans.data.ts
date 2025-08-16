import {Plan} from "../models/plans.js"

export const plansData: Plan[] = [
  {
    id: 1,
    planType: "Free",
    planPrice: 0,
    maxProjects: 10,
    icons :[
      "fa-solid fa-paper-plane",
      "fa-solid fa-dollar-sign",
    ],
    title : "Empieza gratis y crea tus primeros proyectos",
    content : [
      "Editor de código en HTML, CSS y JavaScript",
      "Colaboración en tiempo real",
      "Hasta 10 proyectos guardados"
    ]
  },
  {
    id: 2,
    planType: "Plus",
    planPrice: 30,
    maxProjects: 50,
    icons :[
      "fa-solid fa-plane",
      "fa-solid fa-dollar-sign",
    ],
    title : "Potencia tu creatividad con el plan Plus",
    content : [
      "Todo lo del plan Free",
      "Hasta 50 proyectos guardados",
      "Marca tus proyectos como favoritos",
    ]
  },
  {
    id: 3,
    planType: "Pro",
    planPrice: 50,
    maxProjects: 100,
    icons :[
      "fa-solid fa-rocket",
      "fa-solid fa-dollar-sign",
    ],
    title : "Lleva tus proyectos al siguiente nivel con Premium",
    content : [
      "Todo lo del plan Plus",
      "Hasta 100 proyectos guardados",
      "Soporte premium y atención rápida",
    ]
  }
]