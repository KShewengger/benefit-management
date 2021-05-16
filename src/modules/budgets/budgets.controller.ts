import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { BudgetService } from '@budgets/providers/budget.service';
import { Budget } from '@budgets/common/budget.entity';


@Controller('budgets')
export class BudgetsController {

  private logger = new Logger('BudgetsController');

  constructor(private budgetService: BudgetService) {}

  @Get()
  async getCompanyEmployees(): Promise<Budget[]> {
    return this.budgetService.getAllBudgets();
  }

}
