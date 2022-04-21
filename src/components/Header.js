import classes from './Header.module.css'

const Header = () =>{
    return (
        
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.mainContainer}>
                    <div alt='weatherLogo' className={classes.waetherLogo}></div>
                    <div className={classes.aboutContainer}>
                        <div className={classes.aboutText}> Weather Project </div>
                    </div>
                    <div alt='iitu.logo' className={classes.iituLogo}></div>
                </div>
            </div> 

        </header> 

    );
}

export default Header;