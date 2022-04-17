import classes from './Nav.module.css'

const nav = () =>{
    return (
        <nav className={classes.nav}>
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    <a href='/Home' className={classes.menu}>Home</a>   
                    <a href='/Page2' className={classes.menu}>Page2</a>  
                    <a href='/Page3' className={classes.menu}>Page3</a>  
                    <a href='/About' className={classes.menu}>About</a>               
                </div>
            </div>
         
        </nav> 

     );
}

export default nav;