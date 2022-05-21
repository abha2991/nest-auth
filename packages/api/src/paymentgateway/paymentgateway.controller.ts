import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {Public} from '../common/decorators/public.decorator'
import { PaymentgatewayService } from './paymentgateway.service';
import {CreatePaymentgatewayDto, SuccessDto} from './dto/create-paymentgateway.dto'


@Controller('paymentgateway')
export class PaymentgatewayController {
  constructor(private readonly paymentgatewayService: PaymentgatewayService) {}


  @Public()
  @Post()
  create(@Body() createPaymentgatewayDto: CreatePaymentgatewayDto) {
    return this.paymentgatewayService.create(createPaymentgatewayDto);
  }



  @Public()
  @Post('success')
  success(@Body() successDto:SuccessDto)
  {
    return this.paymentgatewayService.success(successDto);
  }
  @Get()
  findAll() {
    return this.paymentgatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentgatewayService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentgatewayService.remove(+id);
  }
}
