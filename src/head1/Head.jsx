import React, { Component } from 'react';
import './Head.css';

class Head1 extends Component {
  render() {
    return (
      <div className="header">
        <div className="headInfo">
          <div className="headInfo1">
            850 agences de voyages
            <b> 01 78 42 78 43</b> <span className="small">(Coût d'un appel local)</span>
          </div>
          <div className="dropDown">
            Mes produits consultés
            <br/>
            <br/>
            <div className="dropDownContent">
              <div className="dropFir">
                <b>Derniers produits consultés</b>
              </div>
              <div className="line"></div>
              <div className="dropSec">
                EFFACER CETTE LISTE
              </div>
            </div>
          </div>
          <div className="headInfo3">
            <a href="https://www.selectour.com/#!/Espace-Client/login">Connexion à l'espace client</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Head1;
