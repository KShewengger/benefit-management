import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VoucherSharedModule } from '@shared/voucher/voucher.module';
import { EmployeeSharedModule } from '@shared/employee/employee.module';

import { OrdersController } from '@orders/orders.controller';
import { OrderService } from '@orders/providers/order.service';
import { OrderResolver } from '@orders/providers/order.resolver';
import { OrderRepository } from '@orders/providers/order.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([ OrderRepository ]),
    VoucherSharedModule,
    EmployeeSharedModule
  ],
  controllers: [ OrdersController ],
  providers: [ OrderService, OrderResolver ]
})
export class OrdersModule {}
