import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { Seeders } from '@seeders/seeders';
import { SeedersModule } from '@seeders/seeders.module';


async function bootstrap() {
  NestFactory.createApplicationContext(SeedersModule)
    .then(app => {
      const logger = app.get(Logger);
      const seeder = app.get(Seeders);

      seeder
        .seed()
        .then(() => logger.debug('Seeding complete!'))
        .catch(error => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => app.close());
    })
    .catch(error => { throw error });
}

bootstrap();
