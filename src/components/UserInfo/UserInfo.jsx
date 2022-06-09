import React, { useState, useCallback, useEffect } from 'react';
import { getCurrentUser } from '../../api/api';
import './UserInfo.css';

export const UserInfo = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = useCallback(async () => {
    const current = await getCurrentUser(user.login);

    setCurrentUser(current);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  console.log(currentUser)

  return (
   <div className='userInfo'>
     {currentUser && (
      <div className='userInfo__card'>
        <img src={currentUser.avatar_url} alt="Active_avatar" />
        <p>{`Name: ${currentUser.name}`}</p>
        <p>{`Followers: ${currentUser.followers}`}</p>
        <p>{`Following: ${currentUser.following}`}</p>
        <p>{`Created_at: ${currentUser.created_at}`}</p>
        <p>{`Company: ${currentUser.company}`}</p>
        <p>{currentUser.email ? `Email: ${currentUser.email}` : `Email: -/-`}</p>
        <p>{currentUser.location ? `Location: ${currentUser.location}` : `Location: -/-`}</p>
        <p>{`Blog: ${currentUser.blog}`}</p>
        <p>{currentUser.bio ? `Bio: ${currentUser.bio}` : `Bio: -/-`}</p>
      </div>
    )}
   </div>
)}
