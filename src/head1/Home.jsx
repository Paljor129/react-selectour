import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="head3">
          <h1 className="head31">Réservez vos VACANCES idéales</h1>
          <h2 className="head32">avec le 1er réseau d'agences de voyages</h2>
          <div className="headBox">
            <div className="headBox1">
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">8034</div>
                  <div className="t">Séjours</div>
                </div>
              </div>
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">2578</div>
                  <div className="t">Circuits</div>
                </div>
              </div>
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">470</div>
                  <div className="t">Croisières</div>
                </div>
              </div>
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">800.000</div>
                  <div className="t">Hôtels</div>
                </div>
              </div>
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">1650</div>
                  <div className="t">Vols</div>
                </div>
              </div>
              <div className="sel">
                <div className="i">ic</div>
                <div className="b">
                  <div className="n">350</div>
                  <div className="t">Trains</div>
                </div>
              </div>
            </div>
            <div className="search">
              <div className="search1">
                <input className="searchPlace" placeholder="  Où voulez vous partir ? "/>
              </div>
              <div>
                <input className="villeBtn" placeholder="  Ville de départ" />
              </div>
              <div>
                <input className="date" placeholder="  Date de départ"/>
              </div>
              <div>
                <button className="btn">Rechercher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
