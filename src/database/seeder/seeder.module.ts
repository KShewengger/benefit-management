import { Logger, Module } from '@nestjs/common';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompanySeederModule } from '@seeder/company/company.module';
import { Seeder } from '@seeder/seeder';


@Module({
  imports: [ TypeOrmProviderModule, CompanySeederModule ],
  providers: [ Logger, Seeder ],
})
export class SeederModule {}
