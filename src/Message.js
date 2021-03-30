import React from 'react';
import styled from 'styled-components';


const StyledMessage = styled.div`
    
    display: flex;
    flex-direction: row;
    & div {
        background-color: white;
        border : 1px solid pink;
        padding: 10px;
        margin: 20px;
        border-radius : 10px;
    }
    & img {
        margin: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        align: center;
    }
`;

const Message = ({message}) => {
    /*
    const [transmitter, setTransmitter] = useState("profile1.jpg");
    const handleClick = () => {
        if(transmitter==="profile1.jpg"){
            setTransmitter("profile2.jpg");
        }
        else{
            setTransmitter("profile1.jpg");
        }
    }
    */
    return (
        <StyledMessage>
            <img src={process.env.PUBLIC_URL+"profile1.jpg"} alt="transmitter"/>
            <div>
                {message.text}
            </div>
        </StyledMessage>
    );
}

export default Message;