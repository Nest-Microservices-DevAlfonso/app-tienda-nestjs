import { Type } from "class-transformer"
import { RetrieveIngredientsDto } from "./retrieve-ingredients.dto"
import { IsString } from "class-validator"


export class createPurchaseOrderDto {
  @IsString()
  orderkitchenId:string
  purchaseOrderStatus

  orderStatus:string

  @Type(()=> RetrieveIngredientsDto )
  purchaseOrderDetail: RetrieveIngredientsDto[]
}



// model PurchaseOrderDetail {
//   id                String         @id     @default(uuid())
//   ingredient        String         
//   quantity          Int 
//   orderPurchaseid   String 

//   createdAt       DateTime        @default(now())
//   updatedAt       DateTime        @updatedAt

//   @@index([orderPurchaseid])
//   purchaseOrder   PurchaseOrder   @relation(fields: [orderPurchaseid], references: [id])
// }