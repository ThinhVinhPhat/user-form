import { useState } from "react";
import { User } from "../types/user";
import "./style.css";
type UserInfoProps = {
  setUserList: (userList: User[]) => void;
};

function UserInfo({ setUserList }: UserInfoProps) {
  const [form, setForm] = useState<User>({
    id: 0,
    name: "",
    age: 0,
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      id: Math.random(),
      name: name,
      age: age,
    });
    if (name !== "" && age > 0) {
      setUserList((prev: User[]) => [...prev, form]);
    }
  };

  return (
    <div className="user-create-wrapper">
      <h1>User Info</h1>
      <form className="user-create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserInfo;
