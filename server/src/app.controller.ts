import {BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards, HttpStatus} from '@nestjs/common';

import {AppService} from "./app.service"

import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService
  ) {
  }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.appService.create({
      name,
      email,
      password: hashedPassword
    });

    delete user.password;

    return { status:201,message:"Registered Successfully"};
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ) {
    const user = await this.appService.findOne({email});

    if (!user) {
      throw new BadRequestException('invalid credentials');
      // return {status:400,
      //   message: 'Invalid Credentials'}
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('invalid credentials');
      // return {status:400,
      //   message: 'Invalid Credentials'}
    }

    const jwt = await this.jwtService.signAsync({id: user.id});

    response.cookie('jwt', jwt, {httpOnly: true});

    return {
      status:201,
      message: 'Success'
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.appService.findOne({id: data['id']});

      const {password, ...result} = user;

      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({passthrough: true}) response: Response) {
    response.clearCookie('jwt');

    return {
      status:201,
      message: 'success'
    }

  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  // @Get("/facebook/redirect")
  // @UseGuards(AuthGuard("facebook"))
  // async facebookLoginRedirect(@Req() req: Request): Promise<any> {
  //   return {
  //     statusCode: HttpStatus.OK,
  //     data: req.user,
  //   };
  // }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request, @Res() res: Response) {

    console.log("jwt")
    const jwt = this.jwtService.signAsync(req.user);
    res.cookie('jwt', jwt, {httpOnly: true});

    return req.user;
    };




}




// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { AppService } from './app.service';
//
// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//
//
//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
//
// }
