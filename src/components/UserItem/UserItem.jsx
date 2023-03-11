import { Li } from './UserItem.styled';

export const UserItem = ({ id, name, email, bio, deleteUser }) => {
  return (
    <Li>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <p>Bio: {bio}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </Li>
  );
};
