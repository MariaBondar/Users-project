import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUsers } from '../../api/api';
import { UserInfo } from '../UserInfo/UserInfo';
import './UsersList.css';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const { userLogin } = useParams();
  const activeUser = users.find(user => user.login === userLogin);

  const getData = useCallback(async () => {
    const allUsers = await getUsers();

    setUsers(allUsers);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {!activeUser && (
        <ul className="list">
          {
            users.map(user => (
              <li key={user.id} className="list__item">
                <Link
                  to={`/users/${user.login}`}
                  className="list__link"
                > 
                  <img 
                    src={`${user.avatar_url}`} 
                    alt="Avatar"
                    className='image__avatar'
                  />
                  <p>{`Profile link: ${user.html_url}`}</p>
                  <p>{`Login: ${user.login}`}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      )}

      {activeUser && (
        <UserInfo
          user={activeUser}
        />
      )}
    </div>
  );
};