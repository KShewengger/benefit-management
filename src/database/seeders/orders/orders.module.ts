import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeders/shared/seed-create/seed-create.module';

import { Order } from '@orders/models/order.entity';
import { OrderSeederService } from './orders.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Order ]),
    SeedCreateSharedModule
  ],
  providers: [ OrderSeederService ],
  exports: [ OrderSeederService ],
})
export class OrderSeederModule {}
