import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Company } from '@companies/common/company.entity';
import { CompanySeederService } from './company.service';


@Module({
  imports: [ TypeOrmModule.forFeature([ Company ]) ],
  providers: [ CompanySeederService ],
  exports: [ CompanySeederService ],
})
export class CompanySeederModule {}
