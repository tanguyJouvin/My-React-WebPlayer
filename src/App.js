import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://www.youtube.com/watch?v=hHW1oY26kxQ',
      playing: false,
      volume: 0.5,
      duration: 0,
      wastedTime: 0,
      remainTime: 0
    };
  }
  togglePlaying = () => {
    this.setState({playing: !this.state.playing});
  }
  upVolume = () => {
    if(this.state.volume < 1) {
      this.setState({volume: parseFloat((this.state.volume + 0.1).toFixed(1))});
    }
  }
  downVolume = () => {
    if(this.state.volume > 0) {
      this.setState({volume: parseFloat((this.state.volume - 0.1).toFixed(1))});
    }
  }
  getDuration = (durationVideo) => {
    this.setState({duration: durationVideo});
  }
  getProgress = (progressVideo) => {
    this.setState({
      wastedTime: progressVideo.playedSeconds.toFixed(0),
      remainTime: (this.state.duration - progressVideo.playedSeconds).toFixed(0)
    })
  }
// objet lu lorsqu'on console.log(duration) de getDuration et pour utiliser dans la méthode getProgress
//{playedSeconds: 6.812598053405762, 
// played: 0.0007096573842635271, 
// loadedSeconds: 31.497, 
// loaded: 0.0032809918414273736}
  handleUrl = (event) => {
    this.setState({url: event.target.value});
    console.log(event)
  }

  render() {
    return (
      <div  className ="light-blue darken-4">
        <div className="video-container">
          <ReactPlayer
            className="responsive-video"
            onDuration={this.getDuration}
            onProgress={this.getProgress}
            volume={this.state.volume} 
            playing ={this.state.playing} 
            url={this.state.url} 
          />
        </div>
        <input type="text" 
          placeholder="enter an url video" 
          value={this.state.url} 
          onChange={this.handleUrl}/>
          If you want, you can change the video, type a new url<br/>
        <button
          className="btn-floating btn-large orange darken-4 pulse"
          onClick={this.togglePlaying}>{this.state.playing ? "Stop" : "Start"}
        </button>
        <button 
          className="btn-floating btn-large orange darken-4 pulse"
          onClick={this.upVolume}
        >Vol +</button>
        <button 
          onClick={this.downVolume}
          className="btn-floating btn-large orange darken-4 pulse"
        >Vol -</button>
        <p className="custom_text">duration video : {this.state.duration} seconds</p>
        <p className="custom_text">Time remaining : {this.state.remainTime} </p>
        <p className="custom_text">Time wasted : {this.state.wastedTime} </p>
      </div>
    );
  }
}

export default App;
