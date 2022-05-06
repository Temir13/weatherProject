import classes from './NavPages.module.css';
import {Proptest} from './props/proptest'


const Page3 = () =>{
    return (
        <div className={classes.Page3}>
            <div className={classes.container}>
                <h2>Пользовательские блоги</h2>
                <div className={classes.content}>
                <Proptest 
                   BlogPhoto={'https://i.insider.com/593af232bf76bb72038b4c7a?width=1000&format=jpeg&auto=webp'}     
                   BlogDescryption='Мир на гране ядерной войны, или нет? что же нам делать в этот не простой период? Ответ прост. Нам понадобятся веревка и мыло....'  
                    />
                    <Proptest 
                   BlogPhoto={'https://i.pinimg.com/736x/51/1f/b7/511fb758c7caafc880e44e86c3a8515a--wallpapers-android-anime-art.jpg'}     
                   BlogDescryption='Почему Харухи самое лучшее аниме на  всем всем? Потому что. '  
                    />
                    <Proptest 
                   BlogPhoto={'https://cdn.prod.www.spiegel.de/images/f7bc7900-0001-0004-0000-000000300229_w1528_r1.4512847965738758_fpx49.58_fpy50.jpg'}     
                   BlogDescryption='Что делать, если после землятресения у Вас пропал весь смысл жизни? Дом, машина, скидочная карта в Fun Day, все это теперь лишь груда мусора? Не беда, Вам всего лишь нужна веревка и мыло...'  
                    />
                    <Proptest 
                   BlogPhoto={'https://avatars.mds.yandex.net/get-zen_doc/1585599/pub_5e2f27540ce57b00ae333640_5e2f281ac31e4900b03bee74/scale_1200'}     
                   BlogDescryption='Глобальное потепление. Причины формирование и анализ. '  
                    />
                    <Proptest 
                   BlogPhoto={'https://gtrkkursk.ru/sites/default/files/news/4102/preview-1234802024.jpg'}     
                   BlogDescryption='Продам Гараж'  
                    />

                </div>

            
            </div>           
        </div>
    );
}

export {Page3};