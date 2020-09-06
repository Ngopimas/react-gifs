import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const GIPHY_API_KEY = 'ZexdtUZzM8eVfKkCJHMXN2VFa74r0faI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifs}
            selectGif={this.selectGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
