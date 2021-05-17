import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ OrderRepository ]) ],
  providers: [ OrderService ],
  exports: [ OrderService ]
})
export class OrderSharedModule {}
