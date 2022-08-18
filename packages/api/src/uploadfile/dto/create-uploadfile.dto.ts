import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export class CreateUploadfileDto {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fileName: string

  @Column()
  file: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
