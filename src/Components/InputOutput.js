import React, {Component} from 'react'
import data from '../assets/data';
import Display from "./Display"


export default class InputOutput extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            index: 0,
            previousIndex: -1,
            person: data[0]
        }

    }
   
    subtract = () => {
        if(this.state.page > 1){
            this.setState({page: this.state.page - 1})
            this.setState({index: this.state.index - 1})
            this.setState({previousIndex: this.state.previousIndex - 1})
            this.setState({person: data[this.state.previousIndex]})

            
        }
    }
    add = () => {
        if(this.state.page < 25){
        this.setState({page: this.state.page + 1})
        this.setState({index: this.state.index + 1})
        this.setState({previousIndex: this.state.previousIndex + 1})
        this.setState({person: data[this.state.page]})
        
        }
    }
 
    render(){
        console.log(this.state.page)
        console.log(data[this.state.index])
        console.log(this.state.person)

        return(
            <div>
                <section>
                    <Display 
                    currentPage={this.state.page}
                    currentPerson={this.state.person}/>
                </section>
                <section className="Buttons">
                    <button className='BlackButtons' onClick={this.subtract} >&lt; Previous</button>
                    <div className='BlueButtonsDiv'>
                        <button className='BlueButtons'> "Edit"</button>
                        <button className='BlueButtons'> "Delete"</button>
                        <button className='BlueButtons'> "New"</button>
                    </div>
                    <button className='BlackButtons' onClick={this.add}>Next &gt;</button>
                </section>
                
            </div>

            )
        }
    
}