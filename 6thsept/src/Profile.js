import React from "react";
//using props
// export default function Profile(prop)
// {
//     return(<h1>{prop.text.name}</h1>);
// }
export default class Profile extends React.Component
{
    render()
    {
        return(
            <div>
                {this.props.text.name}
            </div>
        )
    }
}