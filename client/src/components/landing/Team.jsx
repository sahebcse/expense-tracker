import React from 'react';  
import Icon from '@material-ui/icons/GitHub'
import Icon2 from '@material-ui/icons/Instagram'
import Icon3 from '@material-ui/icons/LinkedIn'
import Icon4 from '@material-ui/icons/CardTravel'
import useStyles from '../styles'

export const Team = (props) => {
  const classes = useStyles();
  return (
    <div id='teambox' className='text-center'>
      <div className='container teamj'>
        <div className='section-title'>
          <h2>Meet the Team</h2>
          <p>
            Meet the team of hardworking and passionate developers....
          </p>
        </div>
        <div className='row'>

          <div className='col-md-4 col-sm-6 team'>
            <div className='thumbnail'>
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP7B1Fl5Lyp_8SlbXyCh5IeP-Diin8hOodA&usqp=CAU" alt='...' className='team-img' />
              <div className='caption'>
                  <h4>Shekhar Suman</h4>
                  <div className={`${classes.teamicons}`}>
                    <a href="#" className={classes.teamiconssingle}><Icon></Icon></a>        
                    <a href="#" className={classes.teamiconssingle}><Icon2 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon3 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon4 /></a>    
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-6 team'>
            <div className='thumbnail'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP7B1Fl5Lyp_8SlbXyCh5IeP-Diin8hOodA&usqp=CAU" alt='...' className='team-img' />
              <div className='caption'>
              <h4>Ishan Madhav</h4>
                  <div className={`${classes.teamicons}`}>
                    <a href="#" className={classes.teamiconssingle}><Icon></Icon></a>        
                    <a href="#" className={classes.teamiconssingle}><Icon2 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon3 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon4 /></a>    
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-6 team'>
            <div className='thumbnail'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP7B1Fl5Lyp_8SlbXyCh5IeP-Diin8hOodA&usqp=CAU" alt='...' className='team-img' />
              <div className='caption'>
              <h4>Sushant Kumar</h4>
                  <div className={`${classes.teamicons}`}>
                    <a href="#" className={classes.teamiconssingle}><Icon></Icon></a>        
                    <a href="#" className={classes.teamiconssingle}><Icon2 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon3 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon4 /></a>    
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 team'>
            <div className='thumbnail'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP7B1Fl5Lyp_8SlbXyCh5IeP-Diin8hOodA&usqp=CAU" alt='...' className='team-img' />
              <div className='caption'>
              <h4>Anurag Tiwari</h4>
                  <div className={`${classes.teamicons}`}>
                    <a href="#" className={classes.teamiconssingle}><Icon></Icon></a>        
                    <a href="#" className={classes.teamiconssingle}><Icon2 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon3 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon4 /></a>    
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-sm-6 team'>
            <div className='thumbnail'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP7B1Fl5Lyp_8SlbXyCh5IeP-Diin8hOodA&usqp=CAU" alt='...' className='team-img' />
              <div className='caption'>
              <h4>Saheb Babbage</h4>
                  <div className={`${classes.teamicons}`}>
                    <a href="#" className={classes.teamiconssingle}><Icon></Icon></a>        
                    <a href="#" className={classes.teamiconssingle}><Icon2 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon3 /></a>    
                    <a href="#" className={classes.teamiconssingle}><Icon4 /></a>    
                  </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
