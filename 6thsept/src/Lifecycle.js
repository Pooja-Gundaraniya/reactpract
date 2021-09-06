import React from "react";

export default class Lifecycle extends React.Component
{
    constructor() {
        super();
        console.warn("constructor")
    }
    componentDidMount()
    {
        console.warn("component mount")
    }
    render()
    {
        console.warn("render")
        return(
            <>
            hello
            </>
        );
    }
}