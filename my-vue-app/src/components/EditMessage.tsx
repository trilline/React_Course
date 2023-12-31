import  { useState } from 'react';
import styled from '@emotion/styled';
import { IoMdSend } from 'react-icons/io';
import { FaRegSmile, FaGift } from 'react-icons/fa';
import { Message } from '../models/Message';
import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid'; // pour générer des IDs uniques

// besoin de mess[] car maj
type EditMessageProps = {
    onSendMessage: (newMessages: Message[]) => void; 
    profile: User;
    messages: Message[];
  };

const EditMessage = ({ onSendMessage, profile, messages}: EditMessageProps ) => {
  const [message, setMessage] = useState('');
  const [manuallyEnteredMessages, setManuallyEnteredMessages] = useState<Message[]>([]); 

  const handleSendMessage = () => {
      if (message.trim() !== '') {
        const newMessage = { id:uuidv4(), content: message, sender: profile, timestamp: new Date(), isAutoGenerated: false };
        const updatedManuallyEnteredMessages = [...manuallyEnteredMessages, newMessage];
    
        onSendMessage([...messages, ...updatedManuallyEnteredMessages]);
            setManuallyEnteredMessages([...manuallyEnteredMessages, newMessage]); 
          
        setMessage('');
        console.log('Message envoyé :', newMessage);
      }

  };

  return (
    <EditMessageContainer>
      <InputContainer>
        <IconsContainer>
          <Icon><FaRegSmile /></Icon>
          <Icon><FaGift /></Icon>
        </IconsContainer>
        <MessageInput
          type="text"
          placeholder="Saisissez votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // Si "Entrée", envoyez message
              handleSendMessage();
            }
          }}
        />
        <SendButton onClick={handleSendMessage}>
          <IoMdSend />
        </SendButton>
      </InputContainer>
    </EditMessageContainer>
  );
};


//style
const EditMessageContainer = styled.div`
  background-color: #40444b;
  padding: 16px;
  border-top: 1px solid #202225;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f3136;
  border-radius: 4px;
  padding: 8px;
`;

const MessageInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  color: white;
  margin-right: 8px;
  padding: 0;
  margin-left: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: #b9bbbe;

  &:hover {
    color: white;
  }
`;

const SendButton = styled.button`
  background-color: #7289da;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #677bc4;
  }
`;
export default EditMessage;
