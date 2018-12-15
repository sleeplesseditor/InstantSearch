import React, { Component } from 'react';
import { 
  Highlight, 
  Hits, 
  InstantSearch, 
  SearchBox 
} from 'react-instantsearch-dom';
import './App.css';

const Hit = ({ hit }) => <div className="hit">
  <div className="hitImage">
    <img src={hit.image} alt="item"/>
  </div>
  <div className="hitName">
    <Highlight 
      attribute="name"
      hit={hit}
    />
  </div>
</div>

const Content = () => <div className="content">
  <Hits 
    hitComponent={Hit} 
  />
</div>

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
              className="search_box"
            />
          </header>
          <main>
            <Content />
          </main>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
