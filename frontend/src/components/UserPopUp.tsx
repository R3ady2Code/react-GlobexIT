import React from 'react';
import { IUser } from '../user.types';

interface UserPopUpProps {
  user: IUser;
  closeModal: () => void;
}

const UserPopUp: React.FC<UserPopUpProps> = ({ user, closeModal }) => {
  function clickOutsidePopUp() {
    closeModal();
  }

  function clickToPopUp(e: React.MouseEvent) {
    e.stopPropagation();
  }

  const spanStyle = 'text-lg font-semibold';
  const dataStyle = 'text-zinc-600 whitespace-nowrap text-ellipsis overflow-hidden';

  return (
    <div
      onClick={clickOutsidePopUp}
      className="bg-black/20 w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <div
        onClick={(e) => clickToPopUp(e)}
        className="bg-slate-50 py-12 px-6 w-5/12 rounded-2xl relative">
        <h2 className="text-3xl font-bold text-black mb-8">{user.name}</h2>
        <div className="grid grid-cols-2 gap-y-4 mb-7">
          <span className={spanStyle}>Телефон:</span>
          <p className={`underline text-xl ${dataStyle}`}>{user.phone}</p>
          <span className={spanStyle}>Почта:</span>
          <p className={`underline ${dataStyle}`}>{user.email}</p>
          <span className={spanStyle}>Дата приема:</span>
          <p className={dataStyle}>{user.hire_date}</p>
          <span className={spanStyle}>Должность:</span>
          <p className={dataStyle}>{user.position_name}</p>
          <span className={spanStyle}>Подразделение:</span>
          <p className={dataStyle}>{user.department}</p>
        </div>
        <span className={spanStyle}>Дополнительная информация:</span>
        <p className="text-zinc-600">{user.address}</p>
        <span
          onClick={closeModal}
          className="material-symbols-outlined p-2 bg-violet-700 text-white rounded-full absolute top-[-20px] left-[47%] cursor-pointer">
          close
        </span>
      </div>
    </div>
  );
};

export default UserPopUp;
