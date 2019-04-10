import React, { Component } from 'react'

class SearchBar extends Component {
    state={term:''};
    onInputchange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    
    }
    onFormSubmit=(event)=> {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
  render() {
    return (
      <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className="field">
              <label>Stream Videos</label>
              <input
              type="text"
              value={this.state.term}
              name='term'
              onChange={this.onInputchange} />
          </div>
      </form>
        
      </div>
    );
  }
}

export default SearchBar;




