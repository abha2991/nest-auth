import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CardcaptionEntity } from '../../cardcaptiondetails/entities/cardcaption.entity'

@Entity()
export class CardEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    CardName?: string

    @Column()
    CardCategory: string

    @Column('text', { array: true })
    CardDetails: string[]


    @Column('text', { array: true })
    CardTemplates: string[]

    @Column()
    CardTotalPrice: number

    @Column()
    CardSalePrice?: number

    @Column()
    NoOfPages: number

    @OneToOne(() => CardcaptionEntity, (caption) => caption.Card, {
        eager: true,
        cascade: true
    })
    Caption: CardcaptionEntity
}
