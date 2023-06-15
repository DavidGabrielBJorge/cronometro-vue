import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasCronometro from '../views/TarefasCronometro.vue'
import ProjetosCronometro from '../views/ProjetosCronometro.vue'
import FormularioProjeto from '../views/ProjetosEssenciais/FormularioProjeto.vue'
import ListaProjetos from '../views/ProjetosEssenciais/ListaProjetos.vue'
const rotas: RouteRecordRaw[] =[
    {
        path:'/', 
        name:'Tarefas',
        component: TarefasCronometro
    }, 
    //rota aninhada ou rotas filhas(children)
    {
        path:'/projetos',
        component: ProjetosCronometro,
        children:[
            {
                path:'', 
                name:'Projetos',
                component: ListaProjetos
            },
            {
                path:'novo', 
                name:'Novo projetos',
                component: FormularioProjeto
            },
            {
                path:':id', 
                name:'Editar projeto',
                component: FormularioProjeto,
                props: true//Vai pegar o id e vai injetar na view como se fosse uma propridade do componente
            },
        ]

    }

]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;

/*
createWebHashHistory = tem como função alterar a url da página

Em vez de fazer cada rota ser diferente como nesse caso
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
    }
Pode usar o esquema de rotas aninhadas, pois todas essas rotas tem em comum o projetos, 
logo elas podem ser filhas
*/