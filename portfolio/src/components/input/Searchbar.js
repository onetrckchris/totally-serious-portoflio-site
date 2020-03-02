import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { populateSearchbar } from '../../store/actions';

const Searchbar = ({filledName, populateSearchbar}) => {
    return (
        <SearchContainer>
            <Search 
                value={filledName} 
                onChange={() => populateSearchbar()}
                spellCheck="false"
            />
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

const mapStateToProps = (state) => {
    return {
        filledName: state.filledName
    }
}

export default connect(mapStateToProps, { populateSearchbar })(Searchbar);