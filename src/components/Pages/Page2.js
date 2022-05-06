import { render } from '@testing-library/react';
import { Component } from 'react';
import classes from './NavPages.module.css'
export default class Page2 extends Component{
    render(){
        const name = 'News'
        const content = 'Amber Heard testifies: Nothing I did made him stop hitting me'
        const content2 = 'Was this the greatest Champions League match in history?'
        const content3 = 'Retired US major general: What it will take for the Ukrainians to win'
        
        return (
            <div className={classes.Page2}>
                <div className={classes.container}>
                {<h2>{name}</h2>}
                {<a href='https://edition.cnn.com/2022/05/05/entertainment/johnny-depp-amber-heard-trial-testimony/index.html'>{content}</a>}
            <div className={classes.news1}></div>
                {<a href='https://edition.cnn.com/2022/05/04/football/real-madrid-manchester-city-champions-league-spt-intl/index.html'>{content2}</a>}
            <div className={classes.news2}></div>
                {<a href='https://edition.cnn.com/2022/05/04/opinions/bergen-repass-ukraine-interview/index.html'>{content3}</a>}
            <div className={classes.news3}></div>
                </div>        
            </div>
        );
    }
    
}

export {Page2};