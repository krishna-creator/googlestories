import React, { Component } from 'react';
import Story from './story.jsx';
import Weather from './weather.jsx';

class Stories extends Component {
    state = { 
        stories:[
            {
                id:1,
                img:"/images/s1.jpeg",
                header:"Anushka Sharma cradles her baby bump as she stuns in polka dot dress in new photo.",
                paragraph:"Anushka Sharma has been sharing stunning photos with her baby bump. Today, she drop...",
                channel:"News18",
                time:"1 day ago"
            },
            {
                id:2,
                img:"/images/s2.jpeg",
                header:"Pattinson's Batman Means The Oldest Joker Fanscast Should Finally Happen",
                paragraph:"With robert Pattinson playing the Dark Knight in The Batman. the likely seuel to his movie...",
                channel:"Screen",
                time:"18 hours ago"
            },
            {
                id:3,
                img:"/images/s3.jpg",
                header:"Birthday boy Hrithik Roshan announces new film 'Fighter' with Deepika Padukone",
                paragraph:"After keeping fans guessing for long. Hrithik Roshan has finally announced that his next film..",
                channel:"Times of.",
                time:"3 hours ago"
            },
            {
                id:4,
                img:"/images/s4.jpg",
                header:"BTS Jungkook debuts blonde hairdo at 2021 Golden Disc Awards, so it is Happy JK Day ..",
                paragraph:"Global pop stars BTS has kicked moff the New year on an aeard-worhty note already. The..",
                channel:"Bollywood",
                time:"1 day ago"
            },
            {
                id:5,
                img:"/images/s5.jpg",
                header:"Australia vs India, 3rd Test: More Crowd Trouble At SCG, Group Of Spectators Asked T..",
                paragraph:"Australia vs India: A group of spectators were asked to leave on Day 4 of the third Test...",
                channel:"NDTV S",
                time:"7 hours ago"
            },
            {
                id:6,
                img:"/images/s6.jpg",
                header:"World waiting for india's vaccines, watching how it runs world's biggest vaccination dr..",
                paragraph:"India News: NEW DELHI: Noting india's image as the world's pharmacy.Prime Minister...",
                channel:"Times of.",
                time:"1 day ago"
            },
            {
                id:7,
                img:"/images/s7.jpg",
                header:"OnePlus Band is coming on January 11 with 14-day battery life and SpO2 senosor - GSMAr..",
                paragraph:"OnePlus has announced it will unveil its first smartband called OnePlus Band on January 11..",
                channel:"GSMArena",
                time:"1 day ago"
            },
        ]
     }
     onremove=(id)=>{
        const stories=this.state.stories.filter(c => c.id!==id)
        this.setState({stories});
        if(this.state.stories.length===1){
            window.location.reload();
        }
     }
     shuffle=(a)=>{
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * a.length);
            [a[i], a[j]] = [a[j], a[i]];
        }
         return a;
    }
    render() { 
        this.shuffle(this.state.stories);
        return ( 
            <div>
                <Weather />
                {this.state.stories.map(stories => <Story key={stories.id} story={stories} remove={this.onremove} />)}
            </div>
         );
    }
}
 
export default Stories;