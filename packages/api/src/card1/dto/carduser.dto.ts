import {IsOptional, IsString} from 'class-validator'
import {Column} from 'typeorm'

export class UserCardDto {
    CardId:string;
    CardName:string[];
    UserEmail:string;

   // @IsOptional()
   // @IsString()
   //  OrderCreationId?: string;
   //
   //  @IsOptional()
   //  @IsString()
   //  RazorpayPaymentId?: string;
   //
   //  @IsOptional()
   //  @IsString()
   //  RazorpayOrderId?: string;
   //
   //  @IsOptional()
   //  @IsString()
   //  PaymentDate?: Date;
// UserName:string;
}
