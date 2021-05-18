import { Module } from '@nestjs/common';

import { SeedCreateService } from './seed-create.service';


@Module({
  providers: [ SeedCreateService ],
  exports: [ SeedCreateService ],
})
export class SeedCreateSharedModule {}
