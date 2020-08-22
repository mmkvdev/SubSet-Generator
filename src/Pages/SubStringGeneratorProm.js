import React from 'react';
import SubStringController from '../Controllers/SubStringController';

function SubStringGeneratorProm() {
    return (
        <SubStringController
            action="string"
            type="text"
            label="ENTER THE STRING"
            name="description"
            placeholder="Abracadabra... "
        />
    );
}

export default SubStringGeneratorProm;
