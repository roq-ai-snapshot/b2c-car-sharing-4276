import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OwnerInterface {
  id?: string;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface OwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  company_id?: string;
}
