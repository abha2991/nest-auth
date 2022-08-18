import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { compare, hashSync } from 'bcrypt'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  findOne(id: string, relations: string[] = []) {
    return this.usersRepository.findOneOrFail(id, { relations })
  }

  findByEmail(email: string, relations: string[] = []) {
    return this.usersRepository.findOne({ email }, { relations })
  }

  // find(value: string, relations: string[] = []) {
  //   return this.usersRepository.find("", { relations })
  // }

  async findByCredentials(email: string, password: string, relations: string[] = []) {
    const user = await this.findByEmail(email, relations)
    if (!user) {
      // throw new HttpException('Invalid Email', HttpStatus.BAD_REQUEST)
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          status: 'Failed',
          message: 'Invalid Email'
        },
        HttpStatus.BAD_REQUEST
      )
    }

    const areEqual = await compare(password, user.password)
    if (!areEqual) {
      // throw new HttpException('Password Do Not Match', HttpStatus.BAD_REQUEST)
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          status: 'Failed',
          message: 'Invalid Password'
        },
        HttpStatus.BAD_REQUEST
      )
    }
    //return { user: user, statusCode: HttpStatus.OK, status: 'Success', message: 'Logged In Successfully' }

    return user
  }

  findAll(relations: string[] = []) {
    return this.usersRepository.find({ relations })
  }

  async create(user: Partial<User>) {
    try {
      const createdUser = this.usersRepository.create(user)
      return await this.usersRepository.save(createdUser)
    } catch (e) {
      //throw new HttpException(e.message, HttpStatus.BAD_REQUEST)

      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          status: 'Failed',
          message: e.message
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }

  async updatePassword(id: string, password: string) {
    const hashedPassword = hashSync(password, 10)
    await this.update(id, { password: hashedPassword })
  }

  update(id: string, user: Partial<User>) {
    return this.usersRepository.update(id, user)
  }

  async remove(id: string) {
    await this.usersRepository.delete(id)
  }
}
