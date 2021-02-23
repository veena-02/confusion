import React from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';


function Profile() {

    const uploadedImage = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const {current} = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="Profile">
          <h1 style={{color: '#2d2d74',fontSize:'28px'}}>Profile</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div>
          <img
            ref={uploadedImage}
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border:'none !important',
              outline: 'none',
              backgroundColor:'whitesmoke',
              backgroundImage:`${<PhotoCameraIcon />}`
            }}
          />
        </div>
        <div>
            <label>College Name</label>
            <input type='text'></input>
        </div>
        
        <div>
            <label>City</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Linked in</label>
            <input type="url"></input>
        </div>
      </div>
    );
  }

  export default Profile;