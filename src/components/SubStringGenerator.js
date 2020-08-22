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
// import LoadingOverlay from 'react-loading-overlay';
// import { ClassicSpinner } from 'react-spinners-kit';

function SubStringGenerator() {
    const [string, setString] = useState([]);
    const onSubmit = (values) => {
        console.log('subString: ', subStringGenerator(values.description));
        setString(subStringGenerator(values.description));
        // console.log('Form', values);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
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

                        {string.map((v, i) => {
                            return (
                                <div key={i} className="textEditor">
                                    {v}
                                </div>
                            );
                        })}
                    </Form>
                );
            }}
        </Formik>
    );
}

export default SubStringGenerator;
