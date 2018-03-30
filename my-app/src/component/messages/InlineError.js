import React, from 'react';
import Divider from 'semantic-ui-react';

const InlineError = ({text})=>
    <span style={{color:"red"}}>
        {text}
    </span>

export default InlineError;