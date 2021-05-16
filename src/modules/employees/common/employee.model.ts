export interface EmployeeModel {
  readonly id: number;
  companyId: number;
  name: string;
  monthly_budget: number;
}

export interface EmployeeExpenditureResponse extends EmployeeModel {
  total_spent: number;
  tax: number;
  net_salary: number;
}
