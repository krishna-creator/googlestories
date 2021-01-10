import React, { Component } from 'react';
import heart from './svg/heart.svg';
import heartfilled from './svg/heartfilled.svg';
import share from "./svg/share.svg";
import menu from "./svg/menu.svg";
class Story extends Component {
    state = {
        favorite:heart,
        boolean:true
     }
     colorChange=()=>{
        let c;
        this.state.boolean=!this.state.boolean;
        c=this.state.boolean? heart : heartfilled;
        this.setState({favorite:c});
     }
    render() { 
        
        return ( 
            <div className="m-3 rounded d-flex justify-content-center shadow-lg" style={{background:"#444",position:'relative'}}>
                <div>
                    <img src={this.props.story.img} className="img-fluid d-block mx-auto" alt="noImage"/>
                    <div className="container text-light p-2">
                        <h5>{this.props.story.header}</h5>
                        <p>{this.props.story.paragraph}</p>
                        <span>{this.props.story.channel}</span><span className="mx-2">&#8226;{this.props.story.time}</span>
                        <span style={{position:'absolute',right:'0'}}>
                            <img src={this.state.favorite} onClick={this.colorChange} className="mx-3" alt="heart"/>
                            <img src={share}  alt=""/>
                            <img src={menu} onClick={()=>this.props.remove(this.props.story.id)} className="mx-3" alt=""/>
                        </span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Story;