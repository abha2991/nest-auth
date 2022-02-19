import { hashSync } from 'bcrypt'
import { Exclude } from 'class-transformer'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column({ nullable: true })
  lastName?: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  phoneNumber?: string

  @Column({ nullable: true })
  profileImage?: string

  @Column({ type: 'boolean', default: false })
  active: boolean

  @Column({ nullable: true })
  @Exclude()
  password?: string

  @Column({ nullable: true })
  provider?: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  async hashPassword() {
    this.password = this.password ? hashSync(this.password, 10) : null
  }
}
