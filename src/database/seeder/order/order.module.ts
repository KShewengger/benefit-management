import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from '@orders/common/order.entity';
import { OrderSeederService } from './order.service';


@Module({
  imports: [ TypeOrmModule.forFeature([ Order ]) ],
  providers: [ OrderSeederService ],
  exports: [ OrderSeederService ],
})
export class OrderSeederModule {}
