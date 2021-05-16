import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Budget } from '@budgets/common/budget.entity';


@Injectable()
export class BudgetService {

  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>
  ) {}

  async getAllBudgets(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

}
