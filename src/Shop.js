import React, { Component} from 'react'

import './Shop.css'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';

class Shop extends Component{
    constructor(){
        super();

        var items=[
            {
                id:1,
                name:"Shirt",
                price:100
            },
            {
                id:2,
                name:"Pant",
                price:100
            },
            {
                id:3,
                name:"Short",
                price:100
            }
        ]

        this.state={
            items:items
        }
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items}/>
                </div>
                <div className="column">
                    <Cart/>
                    <Checkout/>
                </div>
            </div>
        )
    }
}

export default Shop;