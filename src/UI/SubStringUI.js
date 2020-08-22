import React from 'react';
import { Field } from 'formik';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/core';

function SubStringUI(props) {
    const { label, name, ...rest } = props;
    return (
        <Field name={name}>
            {({ field, form, values }) => {
                // console.log('Values', form);
                return (
                    <div>
                        <FormControl
                            isInvalid={form.errors[name] && form.touched[name]}
                        >
                            <FormLabel
                                className="formLabelContainer"
                                htmlFor={name}
                            >
                                {label}
                            </FormLabel>
                            <Input
                                id={name}
                                width="600px"
                                height="50px"
                                {...rest}
                                {...field}
                            />
                            <FormErrorMessage className="errorLabelContainer">
                                {form.errors[name]}
                            </FormErrorMessage>
                        </FormControl>
                    </div>
                );
            }}
        </Field>
    );
}

export default SubStringUI;
