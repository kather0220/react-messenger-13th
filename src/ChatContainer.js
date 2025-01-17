import React, {useEffect} from 'react';
import styled from 'styled-components';
import Message from './Message';


const StyledChatContainer = styled.div`
        display: flex;
        flex-direction: column;
        float: right;
        height: 100%;
        width: 92%;
        padding-top: 150px;
        padding-bottom: 70px;
        background: Snow;
`;



const ChatContainer = ({ message, user }) => {
    
  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
})
    return(
        <StyledChatContainer>
            {message.map(text_input =>(
                <Message message={text_input} key={text_input.id} user={user}/>
            ))}
        </StyledChatContainer>
        
    );
}

export default ChatContainer;