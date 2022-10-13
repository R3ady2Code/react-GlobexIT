import React from 'react';
import Input from './components/Input';
import UserCard from './components/UserCard';
import { useGetUsersQuery } from './store/users.api';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const { data, isLoading, error } = useGetUsersQuery(searchValue);

  return (
    <div className="container w-3/4 mx-auto py-4">
      <Input value={searchValue} setValue={(e) => setSearchValue(e)} />
      {isLoading ? (
        <p className="font-bold text-2xl text-violet-700">Loading...</p>
      ) : error ? (
        <p className="font-bold text-2xl text-red-500">Error with server</p>
      ) : (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {data?.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
