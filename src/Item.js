import React, { Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.item.name}</h1>
                <p>Price:{this.state.item.price}</p>
                <button>Add to cart</button>
            </React.Fragment>
        )
    }
}

export default Item;