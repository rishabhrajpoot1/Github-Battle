import React from "react";
import { Link } from "react-router-dom";


class Battle extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <>
            <div className='battle-home container'>
            <h1>Instruction</h1>
            <div className='flex justify-between align-center'>
                <div className='instruction'>
                    <h3>Enter Two Github Users</h3>
                    <i className="fas fa-user-friends"></i>
                </div>
                <div  className='instruction'>
                    <h3>Battle</h3>
                    <i className="fas fa-fighter-jet"></i>
                </div>
                <div  className='instruction'>
                    <h3>See The Winner</h3>
                    <i className="fas fa-trophy"></i>
                </div>
            </div>
            <h1>Players</h1>
            <div className='flex justify-between align-center'>
                <h5 className='flex-48'>Player One</h5>
                <h5 className='flex-48'>Player Two</h5>
            </div>
            <div className='flex justify-between align-center'>
                {this.props.handleUser1Visibility()}
                {this.props.handleUser2Visibility()}
              
            </div>
           
           

            {(this.props.data.isUser1present === true && this.props.data.isUser2present === true  ) ? <><div className='battle-box'><Link to='/battle/result'> <button className='btn btn-secondary'>BATTLE</button></Link> </div></> : ''}
            </div>
            </>
        );
    }
}

export default Battle;