import { Component } from 'react';
import { FormStyle, Input, Btn, Textarea } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
  };

  handleSubmit = event => {
    const { name, email, bio } = this.state;
    event.preventDefault();
    this.props.onSubmit(name, email, bio);
    this.reset();
  };

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      bio: '',
    });
  };
  render() {
    const { name, email, bio } = this.state;
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <Textarea
          type="text"
          placeholder="About You"
          value={bio}
          name="bio"
          onChange={this.handleInputChange}
        ></Textarea>
        <Btn type="submit">Add User</Btn>
      </FormStyle>
    );
  }
}
