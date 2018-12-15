import React, { Component } from 'react';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InstantSearch
          appId="latency"
          apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
          indexName="bestbuy"
        >
          <header>
            <SearchBox 
              translations = {{ placeholder: 'Search Box'}}
            />
          </header>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
