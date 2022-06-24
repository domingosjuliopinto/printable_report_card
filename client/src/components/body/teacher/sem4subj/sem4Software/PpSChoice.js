import React, { Component } from 'react';

class PpSChoice extends Component {
  render() { 
    return ( 
        <div className = 'box'>
            <div className="back">
                <form action="/viewstats" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <form action="/ppsecmpnbstat" method="get">
                <input type="submit" value="SE CMPN B"/>
            </form>
      </div>
     );
  }
}
 
export default PpSChoice;