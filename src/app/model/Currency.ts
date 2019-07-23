export class Currency{
    id: number
    text: string
    value: number

    constructor(id:number, text:string, value:number){
        this.id = id
        this.text = text
        this.value = value
    }
}