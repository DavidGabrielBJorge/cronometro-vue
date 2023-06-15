import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasCronometro from '../views/TarefasCronometro.vue'
import ProjetosCronometro from '../views/ProjetosCronometro.vue'
import FormularioProjeto from '../views/ProjetosEssenciais/FormularioProjeto.vue'

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
    {
        path:'/projetos/novo', 
        name:'Novo projetos',
        component: FormularioProjeto
    },
    {
        path:'/projetos/:id', 
        name:'Editar projeto',
        component: FormularioProjeto,
        props: true//Vai pegar o id e vai injetar na view como se fosse uma propridade do componente
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