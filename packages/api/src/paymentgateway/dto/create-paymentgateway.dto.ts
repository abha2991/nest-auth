export class CreatePaymentgatewayDto {
  price: number
}

export class SuccessDto {
  cardId: string
  orderCreationId: string
  razorpayPaymentId: string
  razorpayOrderId: string
  razorpaySignature: string
}
