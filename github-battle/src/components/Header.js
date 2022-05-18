
   
import React from "react";
import {NavLink} from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <header className='header'>
                <div className='container flex justify-between align-center'>
                <nav>
                    <ul className='container flex justify-between align-center'>
                        <li> <NavLink className='links' activeClassName='active-link' to='/' exact>Popular</NavLink></li>
                        <li> <NavLink className='links' activeClassName='active-link' to='/battle'>Battle</NavLink></li>
                    </ul>
                </nav>
                <div >{ 1 ? <i className="fas fa-sun"></i> : <i className="red fas fa-moon"></i>}</div>
                </div>
            </header>
            </>
        );
    }
}

export default Header;