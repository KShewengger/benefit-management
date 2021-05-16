import { Resolver, Query } from '@nestjs/graphql';

import { BudgetType } from '@budgets/common/budget.type';
import { BudgetService } from '@budgets/providers/budget.service';


@Resolver(() => BudgetType)
export class BudgetResolver {

  constructor(private budgetService: BudgetService) {}

  @Query(returns => [ BudgetType ])
  async budgets() {
    return this.budgetService.getAllBudgets();
  }

}

