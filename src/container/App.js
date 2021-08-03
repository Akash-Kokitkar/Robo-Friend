import React, { Component } from 'react';
import Cardlist from '../component/Cardlist';
import Scroll from '../component/Scroll'

import Searchbox from '../component/Searchbox';


class App extends Component {
    
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ' '
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

            .then(user => {
                this.setState({ robots: user })
            })

    }

   


   

    onsearchChange = (event) => {

        this.setState({ searchfield: event.target.value })




    }

    

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length ===0) {
            return <h1>LOADING</h1>

        }
        else {
            return (
                <div className='tc'>
                    <h1>Robofriend</h1>
                    <Searchbox searchChange={this.onsearchChange} />
                    <Scroll>
                    <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>






            );
        }

    }
}

export default App;