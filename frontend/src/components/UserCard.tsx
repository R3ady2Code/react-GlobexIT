import React from 'react';
import { IUser } from '../user.types';
import UserPopUp from './UserPopUp';

interface UserCardProps {
  user: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [openPopUp, setOpenPopUp] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setOpenPopUp(true)}
        className="rounded-2xl py-6 px-4 max-w-[400px] min-h-[280px] flex flex-col shadow-xl cursor-pointer">
        <h3 className="font-bold text-2xl mb-8">{user.name}</h3>
        <div className="flex items-center mb-2 gap-3">
          <span className="material-symbols-outlined text-purple-400 text-2xl">phone_iphone</span>
          <p className="text-zinc-500">{user.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-purple-400 text-2xl">mail</span>
          <p className="text-zinc-500 underline">{user.email}</p>
        </div>
      </div>
      {openPopUp && <UserPopUp user={user} closeModal={() => setOpenPopUp(false)} />}
    </>
  );
};

export default UserCard;
