import React from "react";
import { Formik, Form, FormikConfig, FormikValues } from "formik";
import { FormikStepProps } from "../../types";
import {
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";

import {CheckCircle} from '@material-ui/icons';

//This is our wrapper over Formik element which will allow us more fine grain control
//We will loop over the children inside stepper and show one step at a time
//its type is the same as that of Formik along with prop type (return type is always a React Element)
//children here are all the elements inside an Element, so elements like Formik, Form etc. inside FormikStepepr are its children
function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  //we pass all props as received e.g. validation Schema, init values etc. to Formik ()
  //1. push children into an array
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[];
  //2. Keep track of which step we are at
  const [step, setStep] = React.useState(0);
  //3. Keep track of current child
  const currentChild = childrenArray[step] as React.ReactElement<
    FormikStepProps
  >;
  const [completed, setCompleted] = React.useState(false);
  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          //this calls the onSubmit of our parent element
          //passing it the user input values and helper functions
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((step) => step + 1);
        }
      }}
    >
       {/*This stepper is now applied to all children i.e FormikSteps of the FormikStepper */}
       {({ isSubmitting }) => (
        <Form autoComplete="off">
          {
            !completed ? <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper> : null
          }
          {!completed ? currentChild : <div style={{textAlign: "center"}} ><h1 >Registration Successful</h1><br/><CheckCircle color="secondary" fontSize="large"/></div>}
          <Grid container spacing={2}>
            {step > 0 && !completed ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            {!completed ? (
              <Grid item>
                <Button
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {isSubmitting
                    ? "Submitting"
                    : isLastStep()
                    ? "Submit"
                    : "Next"}
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default FormikStepper;
