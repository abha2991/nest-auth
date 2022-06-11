import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CardcaptionEntity } from '../../cardcaptiondetails/entities/cardcaption.entity'

@Entity()
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cardName?: string

  @Column()
  cardCategory: string

  @Column()
  description: string

  @Column('text', { array: true })
  cardDetails: string[]

  @Column('text', { array: true })
  cardTemplates: string[]

  @Column()
  cardTotalPrice: number

  @Column()
  cardSalePrice?: number

  @Column()
  noOfPages: number

  @OneToMany(() => CardcaptionEntity, (caption) => caption.Card, {
    eager: true,
    cascade: true
  })
  Caption: CardcaptionEntity

  // @PrimaryGeneratedColumn()
  // id: number
  //
  // @Column()
  // CardName?: string
  //
  // @Column()
  // CardCategory: string
  //
  // @Column('text', { array: true })
  // CardDetails: string[]
  //
  // @Column()
  // CardTotalPrice: number
  //
  // @Column()
  // CardSalePrice?: number
  //
  // @Column()
  // NoOfPages: number
  //
  // @OneToOne(() => CardcaptionEntity, (caption) => caption.Card, {
  //   eager: true,
  //   cascade: true
  // })
  // Caption: CardcaptionEntity
}
