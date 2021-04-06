import styled from 'styled-components';

const styledInput = styled.div`
    
    box-sizing: border-box;
    padding: 0 2%;

    & > input{
        width: 100%;
        padding: 8px;
        font-size: 22px;
        outline: none;
        border: 1.5px solid gray;
        border-radius: 3px;
        box-shadow: 3px 3px 3px gray;
        margin-bottom: 15px;
    }

    & > input:focus{
        box-shadow: 6px 6px 6px gray;
    }

`

export default styledInput;