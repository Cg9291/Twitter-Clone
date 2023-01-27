import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";

import FollowsRecSection from './components/FollowRecs';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import SearchBar from './components/Searchbar';
import Timeline from './components/Timeline';
import TrendingSection from './components/Trending';



function App() {
  return (
    <div id="App">
      <section id="left-container">
        <Navigation />
        <Profile />
      </section>
      <section id="right-container">
        <div id='timeline-container'>
          <Timeline />
        </div>
        <div id='explore-div'>
          <SearchBar />
          <TrendingSection />
          <FollowsRecSection />
        </div>
      </section>
    </div>
  );
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP
