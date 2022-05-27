import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CardEntity } from '../../cardetails/entities/card.entity'

@Entity()
export class CardcaptionEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => CardEntity, (Card) => Card.Caption)
    @JoinColumn()
    Card: CardEntity

    @Column('simple-json')
    Caption: [
        {
            x: number
            y: number
            font: string
            //text: string
        }
    ]
}
