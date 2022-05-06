import { Component } from 'react';
import classes from './Footer.module.css'

class Footer extends Component{
    render(){
    return (
        <footer className={classes.footer}>
            <div className="container" >
    <div class="row">
      
      <div className="col-lg-4 col-md-6">
        <h3>Everything that kills me, makes me feel alive</h3>

      </div>
      
      <div class="col-lg-4col-md-6">
        <h3>ABOUT</h3>
        <div class="media">

          <div class="media-body">
            <h4 class="media-heading">+7 (707) 707 07 07</h4>
            <p>weather@gmail.com</p>
          </div>
        </div>
        
      </div>
      
      <div className='last'>
        <h3>Thanks for YOU</h3>
      </div>
      
    </div>
  </div>
  <div class="copyright text-center">
    Copyright &copy; 2022 <span>TDE</span>
    </div>

        </footer>

    );
}}

export default Footer;