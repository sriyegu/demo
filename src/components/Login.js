import React from 'react';
import Input from '@material-ui/core/Input';

function Login(){
return(
    <div>
        v
    <p>Login</p>
    <form noValidate autoComplete="off">
      <Input defaultValue="Hello world"  />
      <Input placeholder="Placeholder"  />
      <Input defaultValue="Disabled"  />
      <Input defaultValue="Error" />
    </form>
    </div>
)
}
 
export default Login;