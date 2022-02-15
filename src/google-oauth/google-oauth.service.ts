import { Injectable } from '@nestjs/common';
import { CreateGoogleOauthDto } from './dto/create-google-oauth.dto';
import { UpdateGoogleOauthDto } from './dto/update-google-oauth.dto';

@Injectable()
export class GoogleOauthService {
  create(createGoogleOauthDto: CreateGoogleOauthDto) {
    return 'This action adds a new googleOauth';
  }

  findAll() {
    return `This action returns all googleOauth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleOauth`;
  }

  update(id: number, updateGoogleOauthDto: UpdateGoogleOauthDto) {
    return `This action updates a #${id} googleOauth`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleOauth`;
  }
}
