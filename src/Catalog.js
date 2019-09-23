import React, { Component} from 'react'
import Item from './Item';

class Catalog extends Component{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item item={item}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Catalog;