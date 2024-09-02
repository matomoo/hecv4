'use client'

import useAppUser from "./useAppUser";

const AppUserList = () => {
  const { data: todos, error, isLoading } = useAppUser();
  console.log(todos)

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {todos?.username}
      <div>
        mato
      </div>
    </div>
  );
};

export default AppUserList;
