import React, { useState } from 'react';
import styled from 'styled-components';

const Searchbar = () => {
    const [filledName, setFilledName] = useState('')

    let count = 0;
    const nameArray = ['C', 'h', 'r', 'i', 's', 't', 'i', 'a', 'n', ' ', 'P', 'e', 'l', 'a', 'y', 'o'];

    return (
        <SearchContainer>
            <Search type="search" value={filledName} />
            <img src="./imgs/search.png" alt="#" />
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;

    img {
        height: 15px;
        padding: 7px;
        border: 1px solid black;
        border-left: none;
    }
`;

const Search = styled.input`
    border: 1px solid black;
    border-right: none;
    padding: 5px;
    outline: none;

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`;

export default Searchbar;