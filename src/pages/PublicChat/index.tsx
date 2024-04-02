import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import AvatarWithStatus from '../../components/Chat/AvatarWithStatus';
import ChatBubble from '../../components/Chat/ChatBubble';
import MessageInput from '../../components/Chat/MessageInput';
import MessagesPaneHeader from '../../components/Chat/MessagesPaneHeader';
import { ChatProps, MessageProps } from '../../components/Chat/types';
import { chats } from '../../components/Chat/data';
import { useEffect, useState } from 'react';

type MessagesPaneProps = {
  chat: ChatProps;
};

const PublicChat = (props: MessagesPaneProps) => {
    const chatSelected = chats[0];
    const [chatMessages, setChatMessages] = useState(chatSelected.messages);
    const [textAreaValue, setTextAreaValue] = useState('');
  
    useEffect(() => {
      setChatMessages(chatSelected.messages);
    }, [chatSelected.messages]);

    return (
        <> 
            <Sheet
                sx={{
                height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.level1',
                }}
            >
                <Box 
                    sx={{
                        position: 'fixed',
                        top:0,
                        width:'100%'
                    }}
                >
                    <MessagesPaneHeader sender={chats[0].sender} />
                </Box>
                <Box
                    sx={{
                        py: '5rem',
                        height: ['100vh','78vh']
                    }}
                >
                <Box
                    sx={{ 
                        maxHeight: ['70%','100%'],
                        display: 'flex',
                        flex: 1,
                        minHeight: 0,
                        px: 2,
                        paddingTop: 3,
                        overflowY: 'scroll',
                        flexDirection: 'column-reverse',
                    }}
                >
                    <Stack spacing={2} justifyContent="flex-end">
                        {chatMessages.map((message: MessageProps, index: number) => {
                        const isYou = message.sender === 'You';
                        return (
                            <Stack
                            key={index}
                            direction="row"
                            spacing={2}
                            flexDirection={isYou ? 'row-reverse' : 'row'}
                            >
                            {message.sender !== 'You' && (
                                <AvatarWithStatus
                                online={message.sender.online}
                                src={message.sender.avatar}
                                />
                            )}
                            <ChatBubble variant={isYou ? 'sent' : 'received'} {...message} />
                            </Stack>
                        );
                        })}
                    </Stack>
                </Box>
                </Box>
                <Box 
                    sx={{
                        position: 'fixed',
                        bottom:0,
                        width:'100%'
                    }}
                >
                    <MessageInput
                        textAreaValue={textAreaValue}
                        setTextAreaValue={setTextAreaValue}
                        onSubmit={() => {
                            const newId = chatMessages.length + 1;
                            const newIdString = newId.toString();
                            setChatMessages([
                            ...chatMessages,
                            {
                                id: newIdString,
                                sender: 'You',
                                content: textAreaValue,
                                timestamp: 'Just now',
                            },
                            ]);
                        }}
                    />
                </Box>
            </Sheet>
        </>
        
      );
}

export default PublicChat;