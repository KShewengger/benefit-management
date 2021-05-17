import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Order } from '@orders/common/order.entity';

import { ORDERS } from './order.data';


@Injectable()
export class OrderSeederService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(): Promise<number> {
    for (const order of ORDERS) {
      await this.orderRepository
        .save(order)
        .catch(error => Promise.reject(error))
    }

    return Promise.resolve(ORDERS.length);
  }

}
