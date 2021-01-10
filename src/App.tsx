import React from "react";
import "./App.css";
import { FormValues, FormikStepProps } from "./types";
import {
  validationSchema1,
  validationSchema2,
  validationSchema3,
} from "./validation";
import { Box, Card, CardContent } from "@material-ui/core";
import { Field } from "formik";
import { FormikStepper, FormikStep, Header } from "./components";
import { TextField } from "formik-material-ui";

//this function sleeps after a time has elapsed and promise has resolved
const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  phone: "",
  description: "",
};

const handleFormikSubmit = async (values: any) => {
  //handle final form submit
  await sleep(3000);
  console.log(values);
};

//App function is of type react functional component and its prop type can be any
//it returns a ReactElement
const App: React.FC<any> = (): React.ReactElement | null => {
  return (
    <>
    <Header/>
      <Card className="myCard">
        <CardContent>
          <FormikStepper
            initialValues={initialValues}
            onSubmit={handleFormikSubmit}
          >
            <FormikStep
              label="Personal Information"
              validationSchema={validationSchema1}
            >
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="firstName"
                  component={TextField}
                  label="First Name"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="lastName"
                  component={TextField}
                  label="Last Name"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="email"
                  component={TextField}
                  label="Email"
                />
              </Box>
            </FormikStep>
            <FormikStep label="Password" validationSchema={validationSchema2}>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="password"
                  component={TextField}
                  label="Password"
                  type="password"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="confirmPassword"
                  component={TextField}
                  label="Confirm Password"
                  type="password"
                />
              </Box>
            </FormikStep>
            <FormikStep
              label="Address and Description"
              validationSchema={validationSchema3}
            >
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="address"
                  component={TextField}
                  label="Address"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="phone"
                  component={TextField}
                  label="Phone"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  component={TextField}
                  label="Additional Information"
                />
              </Box>
            </FormikStep>
          </FormikStepper>
        </CardContent>
      </Card>
    </>
  );
};

//Formik stepper will have the same type of arguments as Formik component; hover mouse over Formik to see
//what args it takes. It will help us navigate through the Formik steps

export default App;
