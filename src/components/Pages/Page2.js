import { render } from '@testing-library/react';
import { Component } from 'react';
import classes from './NavPages.module.css'
export default class Page2 extends Component{
    state = {
    
    }

    render(){
        const name = 'Юность'
        const content = 'Звук поставим на всю и соседи не спят'
        const content2 = 'Кто под нами внизу, вы простите меня'
        const content3 = 'А потом о любви говорить до утра'
        const content4 = 'Это юность моя, это юность моя'
        
        return (
            <div className={classes.Page2}>
                <div className={classes.container}>
                {<h2>{name}</h2>}
                {<h3>{content}</h3>}
                {<h3>{content2}</h3>}
                {<h3>{content3}</h3>}
                {<h3>{content4}</h3>}
                </div>        
            </div>
        );
    }
    
}

export {Page2};