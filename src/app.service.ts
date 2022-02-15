

import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }
}


//
// @Injectable()
// export class GoogleService {
//   googleLogin(req) {
//     if (!req.user) {
//       return 'No user from google'
//     }
//
//     return {
//       message: 'User information from google',
//       user: req.user
//     }
//   }
//}
