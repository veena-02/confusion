import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import RateReview from '@material-ui/icons/RateReview'
import Comment from '@material-ui/icons/Comment'
import Notifications from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar/Avatar'

const UserNavbar=()=>{
    return(
        <div className="__navbar">
            <div style={{ display:'flex',alignContent:'center',flex:1}}>
                <div className="__searchbar" style={{ flex:1, display:'flex',margin:'10px',border:'black 2px solid',padding:'8px'}}>
                    <SearchIcon style={{ color:'blue[500]',fontSize:25}} />
                    <input type="text" placeholder=" Search" style={{height:'30px',width:'75%', border:'none', borderStyle:'none',outline:'none',fontSize:'18px'}} ></input>
                </div>
                <div style={{ display:'flex' ,flex:4,justifyContent:'center'}}>
                    <div style={{margin:'0px 5%'}}>
                        <Home 
                            className='__marginsideways' 
                            style={{fontSize:45 , color:'#2d2d74'}} 
                        />
                        <section style={{textAlign:'center',color:'#2d2d74'}}>Home</section>
                    </div>
                    <div style={{margin:'0px 5%'}}>
                        <PeopleAlt 
                            className='__marginsideways' 
                            style={{fontSize:45 , color:'#2d2d74'}} 
                        />
                        <section style={{textAlign:'center',color:'#2d2d74'}}>Groups</section>
                    </div>
                    <div style={{margin:'0px 5%'}}>
                        <RateReview 
                            className='__marginsideways' 
                            style={{fontSize:45 , color:'#2d2d74'}} 
                        />
                        <section style={{textAlign:'center',color:'#2d2d74'}}>Blogs</section>
                    </div>
                </div>
                <div style={{ display:'flex',flex:1,justifyContent:'flex-end',marginTop:15}}>
                    <Comment className='__marginsideways2' style={{fontSize:40 , color:'#2d2d74',marginRight:'5px'}} />
                    <Notifications className='__marginsideways2' style={{fontSize:40 , color:'#2d2d74',marginRight:'5px'}} />
                    <Avatar className='__marginsideways2' style={{marginRight:'5px'}}/>
                </div>
            </div>
        </div>
    );
}
export default UserNavbar;