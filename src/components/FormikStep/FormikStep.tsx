import React from 'react'
import {FormikStepProps} from '../../types';

//We are making our divs into a seperate formik step so each can have its
//own schema validation
function FormikStep({children}: FormikStepProps): React.ReactElement {
    //it just returns the child relements it has
    return <>{children}</>
}

export default FormikStep;
