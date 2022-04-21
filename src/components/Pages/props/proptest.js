import cl from './props.module.css'

const Proptest = (props) =>{
    return (
        <div className={cl.container}>
        <h2 className={cl.MusicHead}>{props.musicHead}</h2>
        <h3 className={cl.verse1}>{props.verse1}</h3>
        <h3 className={cl.verse1}>{props.verse2}</h3>
        <h3 className={cl.verse1}>{props.verse3}</h3>
        <h3 className={cl.verse1}>{props.verse4}</h3>
        </div>
    );
}
export {Proptest};