import React from 'react';
import UserNavbar from './Navbar/Navbar';
import QuestionAnswerOutlined from '@material-ui/icons/QuestionAnswerOutlined'
import Person from '@material-ui/icons/Person'
import bgImg from './../../Assets/feed-bg.jpg';
import './UserLanding.css';
const UserLanding=()=>{
    return(
        <div style={{backgroundColor:'whitesmoke'}}>
            <UserNavbar />
            <div style={{display:'flex'}}>
                <div className='__leftsidebar' style={{display:'flex',flexDirection:'column' ,flex:1}} >
                    <div className="__adds"></div>
                </div>
                <div className='__body' style={{flex:3}} >
                    <div style={{width:'100%',backgroundImage:`url${bgImg}`,height:100,marginTop:25,display:'flex'}}>
                        <Person className='__person' style={{fontSize:40}} />
                        <textarea rows="5" cols="80" name="comment" form="usrform" style={{margin:10,fontSize:'18px'}}>
                                Your Message Here...
                        </textarea>
                        <div style={{display:'flex',flexDirection:'column'}}>    
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <button type='submit' style={{marginTop:10}}>Send</button>
                        </div>    
                    </div>
                    <div style={{width:'100%',margin:'0 auto',backgroundImage:`url(${bgImg})`,height:'100%',marginTop:5}}></div>
                </div>
                <div className='__rightsidebar' style={{flex:1}} >
                    <div className="__adds">
                        <div className='__sideoptions'>
                            <h3>Topics</h3>
                            <ul>
                                <li>Academics</li>
                                <li>Fests</li>
                                <li>Hostel</li>
                                <li>Placements</li>
                            </ul>
                            <div className='footer' style={{width:'50%',margin:'0 auto'}}><QuestionAnswerOutlined/> Message </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default UserLanding;