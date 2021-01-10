import {FormikConfig, FormikValues} from 'formik';

// we will construct ruct seperate interfaces for each form extending this one usign Pick
// we will also use Pick to create proptypes for our each formik form
export interface FormValues {
  //form 1
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  //form 2
  address: string;
  phone: string;
  //form 3
  description: string;
}

export interface FormikStepProps
  extends //Pick constructs a type by picking a set of properties from an interface/ type
  //here, we are creating a new type called FormikStepProps by picking 2 properties
  //children and validationSchema from the interface/ Type <FormikConfig<FormikValues>
  // and a thrird property of label as well
  //the FormikStep will thus be passed children and validationSchema as props. we can choose to 
  //include other properties as well
  //So, we can only pass children, validationSchema and label as props to FormikStep
  Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}
