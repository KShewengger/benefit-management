export interface EmployeeModel {
  readonly id: number;
  name: string;
}

export interface EmployeeExpenditureResponse {
  employee_id: number;
  employee_name: string;
  total_spent: number;
  tax: number;
  net_salary: number;
}
