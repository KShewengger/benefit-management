import { Logger, Module } from '@nestjs/common';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompanySeederModule } from '@seeder/company/company.module';
import { EmployeeSeederModule } from '@seeder/employee/employee.module';
import { PartnerSeederModule } from '@seeder/partner/partner.module';
import { VoucherSeederModule } from '@seeder/voucher/voucher.module';
import { OrderSeederModule } from '@seeder/order/order.module';

import { Seeder } from '@seeder/seeder';


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
    Seeder
  ],
})
export class SeederModule {}
