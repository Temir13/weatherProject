import classes from './Body.module.css'
import Page from './Page/';

const Body = () =>{
    return (
        <div className={classes.body}>
            <div className={classes.container}><Page /></div>
           
        </div>
    );
}

export default Body;