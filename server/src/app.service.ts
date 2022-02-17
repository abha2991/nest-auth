

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
//   async findOrCreate(profile): Promise<User> {
//     const user = await this.userRepository
//       .findOne({ email: profile.emails[0].value })
//       //.exec();
//     if (user) {
//       return user;
//     }
//     return this.userRepository.save({
//       email: profile.emails[0].value,
//       firstName: profile.name.givenName,
//       lastName: profile.name.familyName,
//       Facebook: {
//         id: profile.id,
//         avatar: profile.photos[0].value,
//       },
//     });
//
//   }
// }



// import { Injectable } from '@nestjs/common';
//
// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
