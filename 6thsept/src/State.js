import React from "react";

export default class State extends React.Component {
    constructor() {
        super();
        this.state =
        {
            name: 'pooja',
            surname: 'Gundaraniya',
            count :0
        }
    }
    updateState()
    {
        this.setState({
           name :'neel' ,
           count: this.state.count+1
        })
    }

    render() {
        return (
            <div>
                hello {this.state.name}<br />{this.state.surname}<br/>counter{this.state.count}
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}