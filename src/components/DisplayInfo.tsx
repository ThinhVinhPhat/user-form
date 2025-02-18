import { User } from "../types/user";
import "./style.css";
type DisplayInfoProps = {
  userList: User[];
  onDelete: (id: number) => void;
};

function DisplayInfo({ userList, onDelete }: DisplayInfoProps) {
  return (
    <div>
      {userList.map((user) => (
        <div className="user-info" key={user.id}>
          <p className="user-name">User Name: {user.name}</p>
          <p className={`user-age ${user.age < 18 ? "red" : ""}`}>
            User Age: {user.age}
          </p>
          <button className="delete-user" onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DisplayInfo;
