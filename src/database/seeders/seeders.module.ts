import { Logger, Module } from '@nestjs/common';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompanySeederModule } from '@seeders/companies/companies.module';
import { EmployeeSeederModule } from '@seeders/employees/employees.module';
import { PartnerSeederModule } from '@seeders/partners/partners.module';
import { VoucherSeederModule } from '@seeders/vouchers/vouchers.module';
import { OrderSeederModule } from '@seeders/orders/orders.module';

import { Seeders } from '@seeders/seeders';


@Module({
  imports: [
    TypeOrmProviderModule,
    CompanySeederModule,
    EmployeeSeederModule,
    PartnerSeederModule,
    VoucherSeederModule,
    OrderSeederModule
  ],
  providers: [
    Logger,
    Seeders
  ],
})
export class SeedersModule {}
