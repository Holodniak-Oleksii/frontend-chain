import React from "react";

function Step({context}) {
    return (
        <div className={'step_w'}>
            <div className={'step_gradient'}>
                <div className={'step'}>
                    {context}
                </div>
            </div>
        </div>
    );
}

export default Step
