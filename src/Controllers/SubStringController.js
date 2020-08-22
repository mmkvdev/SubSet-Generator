import React from 'react';
import SubStringUI from '../UI/SubStringUI';

function SubStringController(props) {
    const { action, ...rest } = props;

    switch (action) {
        case 'string':
            return <SubStringUI {...rest} />;
        default:
            return null;
    }
}

export default SubStringController;
