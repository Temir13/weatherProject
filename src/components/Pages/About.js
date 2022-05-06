import classes from './NavPages.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
 
function Message(props)
{
    if (props.isLoggedIn)
        return <div className={classes.text}><h1>Добрый день!</h1> <br></br>
        <h3>Мы студенты университета МУИТ, факультет "Информационная безопасность", группа SIS-2001. <br></br>
        Это наш групповой проект - Прогноз погоды. Но также мы решили добавить пару дополнительных страниц, чтобы было интереснее! Надеемся Вам понравится!</h3>
        </div>;
    else
        return <div><br></br><br></br><h1>Над проектом трудились:  </h1><br></br> 
           <h2> Лазарев Темир<br></br>
            Исмагулова Дана<br></br>
            Алходжа Еркебулан <br></br><br></br><br></br><br></br><br></br>
        </h2>
            <h3>Нажмите сюда для большей информации</h3>
        
        </div> ;
}
 
// Login Component
function Login(props)
{
   return(
           <button className={classes.button} onClick = {props.clickFunc}>
               сюда
           </button>
       );
}
 
// Logout Component
function Logout(props)
{
    return(
           <button className={classes.button} onClick = {props.clickFunc}>
               пока
           </button>
       );
}
 
// Parent Homepage Component
class Homepage extends React.Component{
 
    constructor(props)
    {
        super(props);
 
        this.state = {isLoggedIn : false};
 
        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    }
 
    ifLoginClicked()
    {
        this.setState({isLoggedIn : true});
    }
 
    ifLogoutClicked()
    {
        this.setState({isLoggedIn : false});
    }
 
    render(){
 
        return(
 
            <div>
 
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                 
                {
                    (this.state.isLoggedIn)?(
                    <Logout clickFunc = {this.ifLogoutClicked} />
                    ) : (
                    <Login clickFunc = {this.ifLoginClicked} />
                    )
                }
 
            </div>
                 
            );
    }
}
 
ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
);

const About = () =>{
    return (
        <div className={classes.about}>
            <div className={classes.container}>      <Homepage />   </div>
        </div>
    );
}

export {About};