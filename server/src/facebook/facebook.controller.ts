import { Controller, Get, HttpStatus, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from "express";
import {JwtService} from "@nestjs/jwt";
import { AppService } from "../app.service";
import { JwtAuthService } from '../google-oauth/jwt-auth.services';




@Controller('facebook')
export class FacebookController {
  constructor(

    private jwtAuthService: JwtAuthService
  ) {
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



    const { accessToken } = this.jwtAuthService.login(req.user);
    res.cookie('jwt', accessToken);
    // const jwt = this.JwtAuthService.login(req.user);
    // res.cookie('jwt', jwt, {httpOnly: true});

    return req.user;
  };
}
