import React, { PureComponent } from 'react';
class login extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <label htmlFor="username">UserName</label>
                <input type="text"/>
                <label htmlFor="Password">Password</label>
                <input type="password"/>
            </form>
         );
    }
}
 
export default login;