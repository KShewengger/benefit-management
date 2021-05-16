export interface EmployeeModel {
  readonly id: number;
  companyId: number;
  name: string;
  monthlyBudget: number;
}

export interface EmployeeExpenditureResponse extends EmployeeModel {
  totalSpent: number;
  tax: number;
  netSalary: number;
}
