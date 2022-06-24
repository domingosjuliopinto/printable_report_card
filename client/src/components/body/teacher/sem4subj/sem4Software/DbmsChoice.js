import React, { Component } from 'react';

class DbmsChoice extends Component {
  render() { 
    return ( 
        <div className = 'box'>
            <div className="back">
                <form action="/entermarks" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <form action="/dbmssecmpnb" method="get">
                <input type="submit" value="SE CMPN B"/>
            </form> 
      </div>
     );
  }
}
 
export default DbmsChoice;