import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sympathetic Burly Jellyfish</title>
        <meta property="og:title" content="Sympathetic Burly Jellyfish" />
      </Helmet>
      <h1>Give an instruction</h1>
      <div className="home-container1">
        <label>Label</label>
        <input type="text" placeholder="placeholder" className="input" />
        <button className="home-button button">Enviar</button>
      </div>
    </div>
  )
}

export default Home
