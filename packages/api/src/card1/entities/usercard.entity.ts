

import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class UserCardEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    CardType: string;

    @Column("text", { array: true })
    CardNames: string[];

    @Column()
    CardId: string

    @Column()
   UserId: string;

    @Column({default:"PENDING"})
    PaymentStatus:string;

    @Column("text", { array: true })
    Text:string[];



    // @Column()
    // OrderCreationId?: string;
    //
    // @Column()
    // RazorpayPaymentId?: string;
    //
    // @Column()
    // RazorpayOrderId?: string;
    //
    // @Column()
    // PaymentDate?: Date;









    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date


}
