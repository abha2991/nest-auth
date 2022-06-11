import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CardEntity } from '../../cardetails/entities/card.entity'
@Entity()
export class CardcaptionEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => CardEntity, (Card) => Card.Caption)
  @JoinColumn()
  Card: CardEntity
  @Column()
  page: string

  @Column()
  previewPage: string

  @Column('simple-json')
  Caption: [
    {
      x: number
      y: number
      font: string
      //text: string
    }
  ]

  // @PrimaryGeneratedColumn()
  // id: number
  //
  // @OneToOne(() => CardEntity, (Card) => Card.Caption)
  // @JoinColumn()
  // Card: CardEntity
  //
  // @Column('simple-json')
  // Caption: [
  //   {
  //     x: number
  //     y: number
  //     font: string
  //     text: string
  //   }
  // ]
}
