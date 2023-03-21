export type Button =  {
    id: string,
    size: string,
    position: { top: number, left: number },
    type: string,
    action: string
}

export type ButtonList = Button[];