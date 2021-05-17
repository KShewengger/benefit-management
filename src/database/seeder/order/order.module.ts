import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeder/shared/seed-create/seed-create.module';

import { Order } from '@orders/common/order.entity';
import { OrderSeederService } from './order.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Order ]),
    SeedCreateSharedModule
  ],
  providers: [ OrderSeederService ],
  exports: [ OrderSeederService ],
})
export class OrderSeederModule {}
