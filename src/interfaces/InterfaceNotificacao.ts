export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface InterfaceNotificacao{
    titulo: string
    texto: string
    tipo: TipoNotificacao
    id: number
}