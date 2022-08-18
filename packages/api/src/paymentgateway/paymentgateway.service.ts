import { Injectable } from '@nestjs/common'

import { InjectRazorpay } from 'nestjs-razorpay'
import * as Razorpay from 'razorpay'
import { CardService } from '../card1/card.service'
import { CreatePaymentgatewayDto, SuccessDto } from './dto/create-paymentgateway.dto'

var crypto = require('crypto')

//const Razorpay=require('razorpay')

interface Razorpay {}

@Injectable()
export class PaymentgatewayService {
  public constructor(
    private readonly cardservice: CardService,
    @InjectRazorpay() private readonly razorpayClient: Razorpay
  ) {}

  async create(createPaymentgatewayDto: CreatePaymentgatewayDto) {
    let Price = createPaymentgatewayDto.price

    const instance = new Razorpay({
      key_id: 'rzp_test_g5mVREbtx16Zdy',

      key_secret: 'sRxv9GR2afcwU4CLAs5UGXP2'
    })
    let options = {
      amount: Price * 100,
      currency: 'INR',
      receipt: 'receipt_order_74394'
    }
    return await instance.orders.create(options)
  }

  async success(successDto: SuccessDto) {
    //console.log({ successDto })

    let id = successDto.cardId

    let cardDetails = await this.cardservice.findOne(id)

    let PaymentStatus = 'SUCCESS'
    let updated = await this.cardservice.updatepaymentstatus(id, {
      paymentStatus: PaymentStatus,
      orderCreationId: successDto.orderCreationId,
      razorpayPaymentId: successDto.razorpayPaymentId,
      razorpayOrderId: successDto.razorpayOrderId,
      paymentDate: new Date()
    })
    console.log({ updated })

    const shasum = crypto.createHmac('sha256', 'sRxv9GR2afcwU4CLAs5UGXP2')

    // console.log({
    //   shasum
    // });

    shasum.update(`${successDto.orderCreationId}|${successDto.razorpayPaymentId}`)

    // console.log({
    //   shasum,
    // });

    const digest = shasum.digest('hex')

    // console.log({
    //   digest,
    //
    // });
    // console.log(successDto.razorpaySignature)

    // comaparing our digest with the actual signature
    if (digest !== successDto.razorpaySignature) {
      return 'Transaction not legit!'
    }

    return await successDto
  }

  findAll() {
    return `This action returns all paymentgateway`
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentgateway`
  }

  remove(id: number) {
    return `This action removes a #${id} paymentgateway`
  }
}
