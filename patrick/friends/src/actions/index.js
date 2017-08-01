import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const POST_FRIENDS = 'POST_FRIENDS';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  };
}

export const postFriends = (friendData) => {
  const promise = axios.post('http://localhost:5000/new-friend', {
    name: friendData.name,
    age: friendData.age,
    email: friendData.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
  });
  return {
    type: POST_FRIENDS,
    payload: promise
  }
};
