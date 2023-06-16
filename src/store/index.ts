
/* O "store" será responsável por definir e configurar um estado para a aplicação */
import InterfaceProjeto from "@/interfaces/InterfaceProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { InterfaceNotificacao } from "@/interfaces/InterfaceNotificacao";

interface Estado{//A interface "Estado" representa um estado da aplicação
    projetos: InterfaceProjeto[],
    notificacoes: InterfaceNotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()
//Com as novas versões do vuex é preciso declarar uma chave, através dessa chave de acesso o nosso componente conseguirá pegar e obter a nossa store, que nós configuramos

export const store = createStore<Estado>({//Inicia o estado inicial
    state: {
        projetos: [],
        notificacoes:[]
    },
    mutations:{
        [ADICIONA_PROJETO](state, nomeProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as InterfaceProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: InterfaceProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto//substituindo o antigo projeto para um novo
        },
        [EXCLUIR_PROJETO](state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificacao: InterfaceNotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            //Para desaparecer a notificação
            setTimeout(()=>{
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            },5000)
        }
    }
})

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}