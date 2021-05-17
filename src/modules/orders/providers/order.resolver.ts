import { Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";

import { OrderType } from '@orders/common/order.type';
import { Order } from '@orders/common/order.entity';
import { OrderService } from '@orders/providers/order.service';

import { Voucher } from '@vouchers/common/voucher.entity';
import { VoucherService } from '@shared/voucher/voucher.service';

import { Employee } from '@employees/common/employee.entity';
import { EmployeeService } from '@shared/employee/employee.service';


@Resolver(() => OrderType)
export class OrderResolver {

  constructor(
    private orderService: OrderService,
    private voucherService: VoucherService,
    private employeeService: EmployeeService
  ) {}

  @Query(() => [ OrderType ])
  async orders() {
    return this.orderService.getAllOrders();
  }

  @ResolveField(() => Voucher)
  async voucher(@Parent() order: Order) {
    return this.voucherService.getVoucher(order.voucherId);
  }

  @ResolveField(() => Employee)
  async employee(@Parent() order: Order) {
    return this.employeeService.getEmployee(order.employeeId);
  }

}

