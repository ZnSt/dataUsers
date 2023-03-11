import { Input } from './Filter.styled';

export const Filter = ({ value, changeFilter }) => {
  return (
    <Input
      type="text"
      placeholder="Find..."
      value={value}
      onChange={changeFilter}
    />
  );
};
