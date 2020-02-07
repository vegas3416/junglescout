import React from 'react';
import './profile.scss';

interface ProfileProps {
  //Profile logo will probably be an image from
  logo?: String;
  name: String;
  title?: String;
}

const Profile: React.FC<ProfileProps> = props => {
  const { logo, name, title } = props;

  return (
    <div className='profile'>
      {logo && <img src={require(`../../../images/${logo}`)} />}
      <div className='profile-labels'>
        <span className='name'>{name}</span>
        <span className='title'>{title}</span>
      </div>
    </div>
  );
};

export default Profile;
