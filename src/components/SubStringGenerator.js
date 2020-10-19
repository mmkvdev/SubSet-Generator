import React, { useState } from 'react';
import { Formik, Form } from 'formik';
// import SubStringController from '../Controllers/SubStringController';
import SubStringGeneratorProm from '../Pages/SubStringGeneratorProm';
import {
    initialValues,
    validationSchema,
    subStringGenerator
} from '../utils/formikDependencies';
import { IconButton } from '@chakra-ui/core';
import { PushSpinner } from 'react-spinners-kit';
import SubStringResult from '../Pages/SubStringResult';
// import LoadingOverlay from 'react-loading-overlay';
// import { ClassicSpinner } from 'react-spinners-kit';

function SubStringGenerator() {
    const [string, setString] = useState([]);
    const onSubmit = (values) => {
        console.log('subString: ', subStringGenerator(values.description));
        setString(subStringGenerator(values.description));
        console.log('Form', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <div>
                        <Form>
                            <div className="input-container">
                                <SubStringGeneratorProm />
                                <IconButton
                                    className="iconButtonContainer"
                                    variant="outline"
                                    type="submit"
                                    icon="arrow-forward"
                                    size="lg"
                                />
                            </div>
                        </Form>
                        <SubStringResult result={string} />
                    </div>
                );
            }}
        </Formik>
    );
}

export default SubStringGenerator;
