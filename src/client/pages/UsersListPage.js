import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, clearData } from "./../actions";

class UsersListPage extends Component {
  componentDidMount() {
    const { loaded, fetchUsers } = this.props;
    if (!loaded) {
      this.props.fetchUsers();
    }
  }
  componentWillUnmount() {
    this.props.clearData();
  }
  renderUsers() {
    return this.props.usersList.map(user => <li key={user.id}>{user.name}</li>);
  }
  render() {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <br />
        Here is a big list of users <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users: { usersList, loaded } }) => {
  return {
    usersList,
    loaded
  };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers, clearData })(UsersListPage)
};
