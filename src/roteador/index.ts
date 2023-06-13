import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasCronometro from '../views/TarefasCronometro.vue'
import ProjetosCronometro from '../views/ProjetosCronometro.vue'
const rotas: RouteRecordRaw[] =[
    {
        path:'/', 
        name:'Tarefas',
        component: TarefasCronometro
    },    
    {
        path:'/projetos', 
        name:'Projetos',
        component: ProjetosCronometro
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;

/*
createWebHashHistory = tem como função alterar a url da página
*/