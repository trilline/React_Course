import styled from "@emotion/styled";

type Props = {
    avatar : string;
    name: string;
    onClick?: () => void;
}


const User = ({avatar, name, onClick}: Props) => {
    return (
        <Container onClick = {onClick}>
            <Avatar src= {avatar} />
            <div>{name}</div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    align-items:center;
    gap:0.5rem;
    padding:0.5rem;

    cursor: ${({onClick}) => onClick ? "pointer" : "initial"};
    border-radius: 0.25rem;
    transition: bacground-color 0.1s ease-in-out;

    &:hover {
        background-color: ${({onClick}) => onClick ? "#584f4f": "white"} ;
    }
`


const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius:2rem;
`

export default User;