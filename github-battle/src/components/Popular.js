import React from "react";

import Repo from "./Repo";


class Popular extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            selectedLanguage: 'All',
            repos : null,
        }
    }

    componentDidMount(){
         fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectedLanguage}&sort=stars&order=desc&type=Repositories`)
         .then(res=> res.json())
         .then(data=>{
             this.setState(prevState=>({
                 repos: data.items,
                }));
         })
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.selectedLanguage !== this.state.selectedLanguage) {
          fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.selectedLanguage}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => {
              this.setState({ repos: data.items });
            });
        }
      }

    handleLanguage=(lang)=>{
        this.setState((prevState)=>({
            selectedLanguage: lang,
        }));
    }
    
    handleRepos =(repos)=>{
        console.log(repos);
        return repos.map((repo, index)=>{
            return(<Repo details={repo} index={index}/>);
        });
    }

    render(){
        console.log(this.state.repos);
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return(
            <>
            <header>
                <nav>
                    <ul className='languages flex justify-center align-center'>
                        {languages.map(lang=>{
                            return <> <li onClick={()=>this.handleLanguage(lang)} className={this.state.selectedLanguage === lang ?  'active-lang': ''}>{lang}</li></>;
                        })}
                    </ul>
                </nav>
            </header>
            <div className='flex justify-start align-stretch flex-wrap-yes align-content-stretch'>
            
            {
                this.state.repos === null ?  <><h1>Fetching....</h1> </> : this.handleRepos(this.state.repos)
                
            }
            
            </div>
            </>
        );
    }
}

export default Popular;