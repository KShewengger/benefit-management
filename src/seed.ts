import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { Seeder } from '@seeder/seeder';
import { SeederModule } from '@seeder/seeder.module';


async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then(app => {
      const logger = app.get(Logger);
      const seeder = app.get(Seeder);

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
