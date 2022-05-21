import { Entity, PrimaryGeneratedColumn, Column,OneToOne,JoinColumn } from 'typeorm';
import {CardEntity} from '../../cardetails/entities/card.entity'




@Entity()
export class CardcaptionEntity {
    @PrimaryGeneratedColumn()
    id: number;


    // @OneToOne(() => CardEntity)
    // @JoinColumn()
  // @Column()


    @OneToOne(() => CardEntity, CardId => CardId.id) // specify inverse side as a second parameter
    @JoinColumn()
   CardId: number;

    @Column("simple-json")

    Caption:[{
        x:number,
        y:number,
        font:string,
        text:string,
    }]


}



