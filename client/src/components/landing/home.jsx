import React from 'react';

export default function Footer() {
    return (

        <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='App-header '>
            <div className='row divwhole '>
              <div className='col-sm-6 txt  '>
                
                 <h1>Less stress when sharing expenses with anyone.</h1>
                <h3>Keep track of your shared expenses and balances with housemates,
                     trips, groups, friends, and family.</h3>



                     <a href="/auth" className="btn btn-primary">SignUp Now !!</a>
                      
                 
              </div>
              <div className="col-sm-6 fill">
                <img className="img-fluid" src="data:image/png;base64,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"></img>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
}