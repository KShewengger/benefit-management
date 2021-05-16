export interface EmployeeModel {
  readonly id: number;
  name: string;
  companyId: number;
}

export interface EmployeeExpenditureResponse extends EmployeeModel {
  total_spent: number;
  tax: number;
  net_salary: number;
}
