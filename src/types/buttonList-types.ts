export type Button =  {
    id: string,
    size: string,
    position: { top: string, left: string },
    type: string,
    action: string
}

export type ButtonList = Button[];