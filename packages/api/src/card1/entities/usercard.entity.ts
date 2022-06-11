import { IsOptional } from 'class-validator'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class UserCardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  cardType: string

  @Column()
  description: string
  @Column()
  email: string

  @Column('text', { array: true })
  cardNames: string[]

  @Column('text', { array: true })
  previewCardNames: string[]

  @Column()
  cardId: number

  @Column()
  userId: string

  @Column({ default: 'PENDING' })
  paymentStatus: string

  // @Column("text", { array: true })
  // Text:string[];

  @Column('jsonb', { nullable: true })
  text?: object[]

  @Column()
  cardTotalPrice: number
  @Column()
  cardSalePrice: number
  @Column()
  noOfPages: number

  @IsOptional()
  @Column({ nullable: true })
  orderCreationId?: string

  @IsOptional()
  @Column({ nullable: true })
  razorpayPaymentId?: string

  @IsOptional()
  @Column({ nullable: true })
  razorpayOrderId?: string

  @IsOptional()
  @Column({ nullable: true })
  paymentDate?: Date

  //
  //   @PrimaryGeneratedColumn('uuid')
  //   id: string
  //
  //
  //   @Column()
  //   CardType: string
  //
  //   @Column('text', { array: true })
  //   CardNames: string[]
  //
  //   @Column()
  //   CardId: string
  //
  //   @Column()
  //   UserId: string
  //
  //   @Column({ default: 'PENDING' })
  //   PaymentStatus: string
  //
  //   @Column('text', { array: true })
  //   Text: string[]
  //
  //   // @Column()
  //   // OrderCreationId?: string;
  //   //
  //   // @Column()
  //   // RazorpayPaymentId?: string;
  //   //
  //   // @Column()
  //   // RazorpayOrderId?: string;
  //   //
  //   // @Column()
  //   // PaymentDate?: Date;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
