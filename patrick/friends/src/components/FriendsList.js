import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions'; // <---- '../actions/index.js'
import axios from 'axios';
import '../css/FriendsList.css';

// I THINK THIS IS A CONTAINER INSTEAD OF COMPONENT


class FriendsList extends Component {
    componentDidMount() {
        const promise = axios.get('http://localhost:5000/friends');
        this.props.getFriends(promise);
    }

    render() {
        return (
          <div className="friendsList">
            <div className="friendsListTitle">
              Can Haz Frenz:
                {/* <ul> */}
                <ol>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <li key={i}>
                                <p>{`Friend ${i + 1}`}</p>
                                  <ul>
                                    <li>{`Name: ${friend.name}`}</li>
                                    <li>{`Age: ${friend.age}`}</li>
                                    <li>{`Email: ${friend.email}`}</li>
                                  </ul>
                            </li>
                        );
                    })}
                  </ol>
                {/* </ul> */}
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
