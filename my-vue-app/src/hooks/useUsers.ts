import { useState} from "react";
import { getUsers } from "../services/api";  
import {User} from "../models/User";
import {useMountEffect} from "./useMountEffect";

export const useUsers = () => {
    const[loading, setLoading] = useState(true);
    const[users, setUsers]= useState<User[]>([]);

    useMountEffect(() => {
        (async () => {
            const users = await getUsers();
            setUsers(users);
            setLoading(false);
        })();
    });
    return {users, loading}
}