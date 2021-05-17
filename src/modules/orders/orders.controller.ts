import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { OrderService } from '@shared/order/order.service';
import { Order } from '@orders/common/order.entity';


@Controller('orders')
export class OrdersController {

  private logger = new Logger('OrdersController');

  constructor(private OrderService: OrderService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.OrderService.getAllOrders();
  }

}
