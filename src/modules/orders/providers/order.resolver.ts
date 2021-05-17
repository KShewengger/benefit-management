import { Resolver, Query } from "@nestjs/graphql";

import { OrderType } from '@orders/common/order.type';
import { OrderService } from '@orders/providers/order.service';


@Resolver(() => OrderType)
export class OrderResolver {

  constructor(
    private OrderService: OrderService
  ) {}

  @Query(() => [ OrderType ])
  async orders() {
    return this.OrderService.getAllOrders();
  }

}

