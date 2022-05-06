import s from './Footer.module.css'

const Footer = () =>{
    return (
        <footer className={s.footer}>
            <div className={s.Block}>
                <div className={s.Container}>
                    <div className={s.SocialLinksUp}>
                        <div className={s.IconsUp}>
                            <a href="#" className={s.IconVK}></a>
                            <a href="#" className={s.IconFB}></a>
                            <a href="#" className={s.IconTW}></a>
                            <a href="#" className={s.IconTG}></a>
                            <a href="#" className={s.IconIN}></a>
                            <a href="#" className={s.IconYT}></a>
                        </div>
                        <div className={s.BlogsUp}>
                        </div>
                    
                </div>  
                    <div className={s.LinksDownContainer}>
                        <div className={s.LinksDownBlock}>
                            <div className={s.DownYear}>© 2022 
                                <a className={s.DownKPA}>  FUll TEAM  </a>
                                <a className={s.Down18A}></a>
                            </div>
                            <div className={s.DownProject}>
                                <a href='https://instagram.com/lazarev_temir?igshid=YmMyMTA2M2Y=' className={s.DownLazarus}> Темира Лазарева</a>
                                <a href='https://instagram.com/_ism_dana_?igshid=YmMyMTA2M2Y=' className={s.DownLazarus}> Дана Исмагулова</a>
                                <a href='https://instagram.com/plohorosho_akj?igshid=YmMyMTA2M2Y=' className={s.DownLazarus}> Еркебулан Алходжа</a>
                                <a href='https://instagram.com/siuus.2001?igshid=YmMyMTA2M2Y=' className={s.DownLazarus}> GROUP   SIS-2001</a>

                            </div>

                        </div>
                    </div>            
                </div>
            </div>
        </footer>

    );
}

export default Footer;