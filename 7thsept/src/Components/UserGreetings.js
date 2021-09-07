import React from "react";
export default class UserGreetings extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render()
    {
        if(this.state.isLoggedIn)
        {
            return(
                <div>welcome pooja</div>
            )
        }
        else
        {
            return(
                <div>welcome Guest</div>
            )
        }
    }
}