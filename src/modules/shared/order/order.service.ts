import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Order } from '@orders/models/order.entity';


@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}

  async getAllOrders(employeeId?: number): Promise<Order[]> {
    return employeeId
      ? this.orderRepository.find({ employeeId })
      : this.orderRepository.find();
  }

}
