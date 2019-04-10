import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends Component {
  state = 
  {
    videos:[],
    SelectedVideo : null
  };

  componentDidMount() {
    this.onTermSubmit('reactjs');
  }
  onTermSubmit= async(term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({
      videos:response.data.items,
      SelectedVideo:response.data.items[0]
    });
  };
  onVideoSelect=(video) => {
    this.setState({SelectedVideo:video});
  };


  render() {
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <div className="ui grid">
      <div className="ui row">
      <div className="eleven wide column">
      <VideoDetails video={this.state.SelectedVideo} />
      </div>
      <div className="five wide column">
      <VideoList onVideoList={this.onSelectedVideos}
      videos={this.state.videos} />
      </div>
      </div>
      </div>
       </div>
    );
  }
}

export default App;
