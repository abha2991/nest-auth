export interface BrideDetails {

    brideName: string
   fatherName: string
    motherName: string
    grandFatherName?: string
    grandMotherName?: string

}


export interface GroomDetails {

    groomName: string
    fatherName: string
    motherName: string
    grandFatherName?: string
    grandMotherName?: string

}

export interface CardUserDetails {

   id: string


}
export interface ICardUser {
    id: string
    PaymentStatus: string
    CardId: string
    UserId: string

}



export interface IGetCardUser {
    id: string
    PaymentStatus: string
    CardId: string
    UserId: string
    CardType:string
    CardNames:string[]
    Text:string[]


}
