import styled from 'styled-components';

const StyledButton = styled.div`

box-sizing: border-box;
padding: 0 2%;

& > button{
    background-color: #184583;
    color: white;
    width: 100%;
    padding: 8px;
    font-size: 22px;
    outline: none;
    border: 1.5px solid gray;
    border-radius: 3px;
    box-shadow: 3px 3px 3px gray;
    margin: 22px 0;
    cursor: pointer;
    transtion: 0.1s;
}

& > button:active{
    box-shadow: -3px -3px 3px gray;
}



`

export default StyledButton;