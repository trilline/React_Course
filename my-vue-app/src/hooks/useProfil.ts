import { useState} from "react";
import { createUser} from "../services/api";  
import {User} from "../models/User";
import {useMountEffect} from "./useMountEffect";

const PROFILE_USER_ID = 999;

export const useProfile = () => {
    const[loading, setLoading] = useState(true);
    const[profile, setProfile]= useState<User>();

    useMountEffect(() => {
        (async () => {
            const nextProfile = createUser(PROFILE_USER_ID);
            setProfile(nextProfile);
            setLoading(false);
        })();
    });
    return {profile, loading}
}
