import { Module } from '@nestjs/common';

import { VoucherSharedModule } from '@shared/voucher/voucher.module';
import { EmployeeSharedModule } from '@shared/employee/employee.module';
import { OrderSharedModule } from '@shared/order/order.module';

import { OrdersController } from '@orders/orders.controller';
import { OrderResolver } from '@orders/providers/order.resolver';


@Module({
  imports: [
    OrderSharedModule,
    VoucherSharedModule,
    EmployeeSharedModule
  ],
  controllers: [ OrdersController ],
  providers: [ OrderResolver ]
})
export class OrdersModule {}
