export class CreatePaymentgatewayDto {
  Price: number
}

export class SuccessDto {
  cardId: string
  orderCreationId: string
  razorpayPaymentId: string
  razorpayOrderId: string
  razorpaySignature: string
}
