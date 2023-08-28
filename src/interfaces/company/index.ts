import { AdminInterface } from 'interfaces/admin';
import { CarInterface } from 'interfaces/car';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin?: AdminInterface[];
  car?: CarInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface;
  _count?: {
    admin?: number;
    car?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
