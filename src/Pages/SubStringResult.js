import React from 'react';

function SubStringResult({ result }) {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {
                /* string.map((v, i) => {
        return (
            <div>
                <ul key={i} className="textEditor">
                    <li>{v}</li>
                </ul>
            </div>
        );
    }) */
                result ? (
                    <div className="textEditor">`{`${result}`}`</div>
                ) : null
            }
        </div>
    );
}

export default SubStringResult;
