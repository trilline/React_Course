import styled from "@emotion/styled";

type Props = {
    avatar : string;
    name : string;
}

const UserProfile = ({avatar, name}: Props) => {
    return (
        <div>
            <Avatar src= {avatar} />
            <div>{name}</div>

        </div>

    )
}
const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius:2rem;
`
export default UserProfile;