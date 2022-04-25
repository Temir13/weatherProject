import classes from './Nav.module.css'
import { Link } from 'react-router-dom';

const nav = () =>{
    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    <a href='/Home' className={classes.menu}>Home</a>   
                    <Link to='/Page2' className={classes.menu}>States</Link>  
                    <Link to='/Page3' className={classes.menu}>Props</Link>  
                    <Link to='/About' className={classes.menu}>About</Link>               
                </div>
            </div>
         
        </nav> 

     );
}

export default nav;