import cl from './props.module.css'

const Proptest = (props) =>{
    return (
        <div className={cl.container}>
            <div className={cl.Content}>
                <img  className={cl.BlogPhoto} src = { props.BlogPhoto } />
                <h4 className={cl.verse1}>{props.BlogDescryption}</h4>
            </div>
        </div>
    );
}
export {Proptest};