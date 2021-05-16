import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { join } from 'path';
import * as config from 'config';


export const TYPEORM_OPTIONS: TypeOrmModuleOptions = {
  ...config.get('db'),
  entities: [ join(__dirname, '/../../../**/**.entity{.ts,.js}') ],
  synchronize: true
};
