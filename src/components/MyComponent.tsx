import { useState } from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
import { User } from "../types/user";

function MyComponent() {
  const [userList, setUserList] = useState<User[]>([
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Jane",
      age: 21,
    },
    {
      id: 3,
      name: "Jim",
      age: 22,
    },
  ]);

  const handleDelete = (id: number) => {
    setUserList((prev: User[]) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="wrapper">
      <UserInfo setUserList={setUserList} />
      <hr />
      <DisplayInfo userList={userList} onDelete={handleDelete} />
    </div>
  );
}

export default MyComponent;
