import React from 'react'
import ReactDOM from 'react-dom/client'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner.js'

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>{pos = position;console.log(position)},
//         (err)=> console.log(err)
//     )
//     return (
//         <h1>
//             {pos}
//         </h1>
//     )

// }

class App extends React.Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //         lat:null,
    //         errMessage:null
    //     };
    // }
    state = {lat:null,errMessage:''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat:position.coords.latitude})
            },
            (err)=>{
                this.setState({errMessage:err.message})
            }
        )
    }
    componentDidUpdate(){
        // console.log("Updated something that i am unaware of");
    }
    render(){
        if(this.state.errMessage && !this.state.lat){
            return <Spinner message={this.state.errMessage}/>
        }
        if(!this.state.errMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat}/>
        }
        return <Spinner message="Please accept location access!"/>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)