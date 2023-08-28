import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  role: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
