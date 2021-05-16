import { EntityRepository, Repository } from 'typeorm';

import { Budget } from '@budgets/common/budget.entity';


@EntityRepository(Budget)
export class BudgetRepository extends Repository<Budget> {

}
