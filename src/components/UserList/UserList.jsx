import { UserItem } from 'components/UserItem';

export const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <ul style={{ marginLeft: '40px' }}>
        {users.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            bio={user.bio}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
    </div>
  );
};
