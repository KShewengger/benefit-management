export interface CompanyModel {
  readonly id: number;
  title: string;
}

export interface CompanyEmployeesResponse {
  employee_id: number;
  employee_name: string;
  company_name: string;
  total: number;
  date: Date;
}
