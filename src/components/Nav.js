import classes from './Nav.module.css'
import { Link } from 'react-router-dom';

const nav = () =>{
    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    <Link to='/Home' className={classes.menu}>Weather</Link>   
                    <Link to='/Page2' className={classes.menu}>News</Link>  
                    <Link to='/Page3' className={classes.menu}>Blogs</Link>  
                    <Link to='/About' className={classes.menu}>About</Link>               
                </div>
            </div>
         
        </nav> 

     );
}

export default nav;