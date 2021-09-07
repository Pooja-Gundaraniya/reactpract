import React from "react";
 export default class Product extends React.Component
 {
     constructor(props){
         super(props);
         this.state={Productid:'',qty:0,isCart:true}
     }
     addToCart =(pid)=>{
         this.setState((state)=>(
            {Productid:pid,qty:state.qty+1}
         ))
     }
     removeCart=() => (
         this.setState({isCart:false})
     );
     render()
     {
        return(
            <>
            <button onClick={()=>this.addToCart(1)}>add to cart</button>
            <button onClick={()=>this.addToCart(2)}>add to cart</button>
            <button onClick={()=>this.addToCart(3)}>add to cart</button>

            { this.state.isCart && <Cart ProductId = {this.state.ProductId} qty={this.state.qty} />}
            { ! this.state.isCart && <h3>Cart has been removed</h3>}
            <button onClick={this.removeCart}>Remove Cart</button>
            </>
        );
     }
 }
 class Cart extends React.Component
 {
    componentDidMount()
    {
        console.log('execute in component did mount');
    }
    componentDidUpdate(prevProps,prevState,){
        if(this.props.Productid!==prevProps.Productid){
            console.log('component did updated');
        }
    }
    componentWillUnmount(){
        console.log('component destroyed');
    }
     constructor(props){
        super(props);
        this.state={qty:this.props.qty}
        console.log('execute in constuctor')
     }
     static getDerivedDtateFromProps(props,state){
        if(props!==this.state.qty){
            return{qty:props.qty}
        }
        return null;
     }
     shouldComponentUpdate(nextProps,nextState){
        if(this.props.qty !==nextProps.qty){
            console.log('shouldcomponenet execute')
            return true;
        }
        return false;
     }

    //  updateQty=()=>{
    //      this.setState((state)=>(
    //         {qty:state.qty+1}
    //      ))
    //  }
    
     render()
     {
         return(
            <>
            cart item({this.state.qty})
            </>
         );
     }
 }