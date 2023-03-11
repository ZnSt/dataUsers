import shortid from 'shortid';
import { Component } from 'react';
import users from 'json/users';
import { Form } from './Form';
import { UserList } from './UserList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    allUsers: users,
    filter: '',
  };

  addUser = (name, email, bio) => {
    const newUser = {
      id: shortid.generate(),
      name,
      email,
      bio,
    };

    this.setState(({ allUsers }) => ({
      allUsers: [newUser, ...allUsers],
    }));
  };

  deleteUser = id => {
    this.setState(({ allUsers }) => ({
      allUsers: allUsers.filter(user => user.id !== id),
    }));
  };

  handleChangeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  render() {
    const { filter, allUsers } = this.state;
    const normilizedFilter = filter.toLowerCase();
    const visibleUsers = allUsers.filter(user =>
      user.name.toLowerCase().includes(normilizedFilter)
    );

    return (
      <div style={{ background: 'lightpink' }}>
        <Form onSubmit={this.addUser} />
        <hr />
        <div style={{ fontSize: '50px', fontWeight: 'bold', color: 'red' }}>
          All Users: {allUsers.length}
        </div>
        <Filter value={filter} changeFilter={this.handleChangeFilter} />
        <UserList users={visibleUsers} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
