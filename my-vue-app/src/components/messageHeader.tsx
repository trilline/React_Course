import styled from '@emotion/styled';
import {  FaVideo, FaUserPlus } from 'react-icons/fa';
import { MdPhoneInTalk , MdPushPin} from 'react-icons/md';


type Props = {
  avatar: string;
  name: string;
};

const MessageHeader = ({ avatar, name }: Props) => {
  return (
    <HeaderContainer>
      <Avatar src={avatar} alt={`Avatar de ${name}`} />
      <UserInfo>
        <UserName>{name}</UserName>
      </UserInfo>
      <IconsSpacer />
      <IconsContainer>
        <Icon>
          <MdPhoneInTalk /> 
        </Icon>
        <Icon>
          <FaVideo /> 
        </Icon>
        <Icon>
          <MdPushPin /> 
        </Icon>
        <Icon>
          <FaUserPlus /> 
        </Icon>
      </IconsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end; /* Alignez les icônes à la fin */
  margin-left: auto; /* Alignez les icônes à la fin */

`;

const Icon = styled.div`
  cursor: pointer;
`;

const IconsSpacer = styled.div`
  margin-left: auto;
  min-width: 61vw
`;

export default MessageHeader;

