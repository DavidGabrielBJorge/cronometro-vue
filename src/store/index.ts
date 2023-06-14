
/* O "store" será responsável por definir e configurar um estado para a aplicação */
import InterfaceProjeto from "@/interfaces/InterfaceProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

interface Estado{//A interface "Estado" representa um estado da aplicação
    projetos: InterfaceProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()
//Com as novas versões do vuex é preciso declarar uma chave, através dessa chave de acesso o nosso componente conseguirá pegar e obter a nossa store, que nós configuramos

export const store = createStore<Estado>({//Inicia o estado inicial
    state: {
        projetos: []
    },
    mutations:{
        'ADICIONA_PROJETO'(state, nomeProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as InterfaceProjeto
            state.projetos.push(projeto)
        }
    }
})

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}