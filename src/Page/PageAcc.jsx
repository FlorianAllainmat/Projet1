import React, { Component } from 'react';
import Media from './Media';



class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Media />
            </div>
         );
    }
}
 
export default Page;