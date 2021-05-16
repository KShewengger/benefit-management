import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BudgetsController } from '@budgets/budgets.controller';
import { BudgetService } from '@budgets/providers/budget.service';
import { BudgetResolver } from '@budgets/providers/budget.resolver';
import { BudgetRepository } from '@budgets/providers/budget.repository';


@Module({
  imports: [ TypeOrmModule.forFeature([ BudgetRepository ]) ],
  controllers: [ BudgetsController ],
  providers: [ BudgetService, BudgetResolver ]
})
export class BudgetsModule {}
