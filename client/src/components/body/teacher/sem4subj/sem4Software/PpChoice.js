import React, { Component } from 'react';

class PpChoice extends Component {
  render() { 
    return ( 
        <div className = 'box'>
            <div className="back">
                <form action="/entermarks" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <form action="/ppsecmpnb" method="get">
                <input type="submit" value="SE CMPN B"/>
            </form>
      </div>
     );
  }
}
 
export default PpChoice;