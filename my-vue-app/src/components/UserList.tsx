import { User } from "../models/User";
import Useritem from "./UserItem"

type Props = {
    users: User[];
    onClick: (user: User ) => void;
}

const UserList = ({users, onClick}: Props) => (
    <div>
      {users.map(({name, avatar, id}) => 
        <Useritem 
        key={id}
        name={name}
        avatar={avatar}
        onClick={()=> onClick({name,avatar,id})}
      
      />
      )}
  
    </div>
);

export default UserList