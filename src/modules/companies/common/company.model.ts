export interface CompanyModel {
  readonly id: number;
  title: string;
}

export interface CompanyEmployeesResponse extends CompanyModel {
  employee_id: number;
  employee_name: string;
  total: number;
  date: Date;
}
