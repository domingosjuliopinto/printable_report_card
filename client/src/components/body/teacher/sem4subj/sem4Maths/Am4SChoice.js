import React, { Component } from 'react';

class Am4SChoice extends Component {
  render() { 
    return ( 
        <div className = 'box'>
            <div className="back">
                <form action="/viewstats" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <form action="/am4secmpnbstat" method="get">
                <input type="submit" value="SE CMPN B"/>
            </form> 
      </div>
     );
  }
}
 
export default Am4SChoice;