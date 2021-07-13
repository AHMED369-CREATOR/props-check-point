import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>{fullName}</h1>
      <h3>{bio}</h3>
      <h2>{profession}</h2>
      <button onClick={() => handleName(`your name ${fullName}`)}>
        alert
      </button>
      <br />
      <img src={children} alt='hi' />
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};
export default Profile;