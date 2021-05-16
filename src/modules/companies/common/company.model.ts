export interface CompanyModel {
  readonly id: number;
  title: string;
}

export interface CompanyEmployeesResponse extends CompanyModel {
  employeeId: number;
  employeeName: string;
  total: number;
  date: Date;
}
