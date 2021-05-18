import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { SeedCreateService } from '@seeders/shared/seed-create/seed-create.service';

import { Order } from '@orders/common/order.entity';
import { ORDERS } from './orders.data';


@Injectable()
export class OrderSeederService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private seedCreateService: SeedCreateService
  ) {}

  async create(): Promise<number> {
    return this.seedCreateService.create(ORDERS, this.orderRepository);
  }

}
