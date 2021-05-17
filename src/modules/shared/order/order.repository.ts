import { EntityRepository, Repository } from 'typeorm';

import { Order } from '@orders/common/order.entity';


@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {

}
