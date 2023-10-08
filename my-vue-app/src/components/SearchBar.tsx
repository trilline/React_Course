import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';



const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Rechercher..." />
      <SearchIcon />

    </SearchBarContainer>
  );
};

//style
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #23272a;
  border-radius: 4px;
  padding: 4px;
`;

const SearchIcon = styled(FaSearch)`
  color: #888;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  background-color: #23272a;

`;

export default SearchBar;
