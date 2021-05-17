import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersController } from '@orders/orders.controller';
import { OrderService } from '@orders/providers/order.service';
import { OrderResolver } from '@orders/providers/order.resolver';
import { OrderRepository } from '@orders/providers/order.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ OrderRepository ]) ],
  controllers: [ OrdersController ],
  providers: [ OrderService, OrderResolver ]
})
export class OrdersModule {}
