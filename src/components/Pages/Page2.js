import { render } from '@testing-library/react';
import { Component } from 'react';
import classes from './NavPages.module.css'
export default class Page2 extends Component{
    state = {
        title:'USSR',
        content:'FALL'
    }

    render(){
        return (
            <div className={classes.Page2}>
                <div className={classes.container}>
                {this.state.title}
                </div>        
            </div>
        );
    }
    
}

export {Page2};