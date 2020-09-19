import React, {Component} from 'react'

export default class Display extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='Window'>
                <div className="PageNumber">{this.props.currentPage}/25</div>
                <div className="FullName">{this.props.currentPerson.name.first} {this.props.currentPerson.name.last}</div>
                <br/>
                <div className='Description'><strong>From</strong>:  {this.props.currentPerson.city}, {this.props.currentPerson.country}</div>
                <div className='Description'><strong>Job Title</strong>: {this.props.currentPerson.title}</div>
                <div className='Description'><strong>Employer</strong>: {this.props.currentPerson.employer}</div>
                <br/>
                <div className='Description'><strong>Favorite Movies</strong>:</div>
                <div className='FaveMovies'>1. {this.props.currentPerson.favoriteMovies[0]}</div>
                <div className='FaveMovies'>2. {this.props.currentPerson.favoriteMovies[1]}</div>
                <div className='FaveMovies'>3. {this.props.currentPerson.favoriteMovies[2]}</div>
            </div>
        )
    }
}