import React, { Component } from "react";
class Child extends Component
{
    render()
    {
        return (<div>
            <p> {this.props.message}</p>
        </div>)
    };
}
export default Child;