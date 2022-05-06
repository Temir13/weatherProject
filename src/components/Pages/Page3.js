import classes from './NavPages.module.css';
import {Proptest} from './props/proptest'


const Page3 = () =>{
    return (
        <div className={classes.Page3}>
            <div className={classes.container}>
                <h2>User blogs</h2>
                <div className={classes.content}>
                <Proptest 
                   BlogPhoto={'https://i.insider.com/593af232bf76bb72038b4c7a?width=1000&format=jpeg&auto=webp'}     
                   BlogDescryption='Is the world on the brink of nuclear war, or not? what should we do in this difficult period? The answer is simple. Well need rope and soap....'  
                    />
                    <Proptest 
                   BlogPhoto={'https://i.pinimg.com/736x/51/1f/b7/511fb758c7caafc880e44e86c3a8515a--wallpapers-android-anime-art.jpg'}     
                   BlogDescryption='Why is Haruhi the best anime on everything? Because.'  
                    />
                    <Proptest 
                   BlogPhoto={'https://cdn.prod.www.spiegel.de/images/f7bc7900-0001-0004-0000-000000300229_w1528_r1.4512847965738758_fpx49.58_fpy50.jpg'}     
                   BlogDescryption='What to do if after an earthquake you lost the whole meaning of life? A house, a car, a discount card in FunDay, all this is now just a pile of garbage? It doesnt matter, you just need a rope and soap..'  
                    />
                    <Proptest 
                   BlogPhoto={'https://avatars.mds.yandex.net/get-zen_doc/1585599/pub_5e2f27540ce57b00ae333640_5e2f281ac31e4900b03bee74/scale_1200'}     
                   BlogDescryption='Global warming. Causes formation and analysis.'  
                    />
                    <Proptest 
                   BlogPhoto={'https://gtrkkursk.ru/sites/default/files/news/4102/preview-1234802024.jpg'}     
                   BlogDescryption='I will sell the Garage'  
                    />

                </div>

            
            </div>           
        </div>
    );
}

export {Page3};