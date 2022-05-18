import React from "react";


class Repo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let details = this.props.details
        return(
            <>
            <div class='repo-details flex-32'>
                  <h1>#{this.props.index+1}</h1>
                  <div className='img-container'>
                      <img className='full-width' src={details.owner.avatar_url} alt='repo'/>
                  </div>
                  <h2>{details.name}</h2>
                  <ul>
                      <li>
                      <i class="fas fa-user"></i>{details.name}
                      </li>
                      <li>
                      <i class="fas fa-star"></i> {details.stargazers_count}
                      </li>
                      <li>
                      <i class="fas fa-code-branch"></i> {details.forks_count}
                      </li>
                      <li>
                      <i class="fas fa-exclamation-triangle"></i> {details.open_issues_count}
                      </li>
                      
                  </ul>
            </div>
            </>
        );
    }
}

export default Repo;