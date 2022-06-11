import { Module } from '@nestjs/common'
import { RazorpayModule } from 'nestjs-razorpay'
import { CardModule1 } from '../card1/card.module'
import { PaymentgatewayController } from './paymentgateway.controller'
import { PaymentgatewayService } from './paymentgateway.service'

@Module({
  imports: [
    RazorpayModule.forRoot({
      key_id: 'rzp_test_g5mVREbtx16Zdy',
      key_secret: 'sRxv9GR2afcwU4CLAs5UGXP2'
    }),
    CardModule1
  ],
  controllers: [PaymentgatewayController],
  providers: [PaymentgatewayService]
})
export class PaymentgatewayModule {}
