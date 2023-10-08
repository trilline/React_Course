import { Message } from "../models/Message";
import { useState, useEffect} from "react";
import { getMessage } from "../services/api";  
import {User} from "../models/User";

export const useMessage = (profile: User, other: User) => {
    const[loading, setLoading] = useState(true);
    const[message, setMessage]= useState<Message[]>([]);

    useEffect(() => {
        (async () => {
            const chat = await getMessage(other, profile);
            setMessage(chat.messages);
            setLoading(false);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[other.id]);
    return {message, loading}
}