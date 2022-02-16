import { Entity, Column ,PrimaryColumn , PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
    id:number;
//   @Column()
// Name:string;
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;



}
