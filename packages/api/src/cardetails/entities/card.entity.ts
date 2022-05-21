import { Entity, PrimaryGeneratedColumn, Column,OneToOne,JoinColumn } from 'typeorm';
import {CardcaptionEntity} from '../../cardcaptiondetails/entities/cardcaption.entity'




@Entity()
export class CardEntity {
    @PrimaryGeneratedColumn()
    @OneToOne(() => CardcaptionEntity, card_id => card_id.CardId)
    id: number;



    // @Column()
    //
    // card_id:number

    @Column()
    CardName?: string;

    @Column()
   CardCategory: string;

    @Column("text", { array: true })
    CardDetails: string[];

    @Column()
    CardTotalPrice: number;


    @Column()
    CardSalePrice?: number;

    @Column()
    NoOfPages:number;



}


