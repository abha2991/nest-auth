import { Module } from '@nestjs/common';
import { PaymentgatewayService } from './paymentgateway.service';
import { PaymentgatewayController } from './paymentgateway.controller';
import { RazorpayModule } from 'nestjs-razorpay';
import {CardModule1} from '../card1/card.module'

@Module({
  imports: [
    RazorpayModule.forRoot({
      key_id: 'rzp_test_g5mVREbtx16Zdy',
      key_secret: 'sRxv9GR2afcwU4CLAs5UGXP2',
    }),
      CardModule1
  ],
  controllers: [PaymentgatewayController],
  providers: [PaymentgatewayService]
})
export class PaymentgatewayModule {}
