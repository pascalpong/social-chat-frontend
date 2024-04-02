import { Box } from "@mui/joy";
import Header from "./Header";
import MyMessages from "./MyMessages";
import Sidebar from "./Sidebar";


const Chat = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Sidebar />
            <Header />
            <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                <MyMessages />
            </Box>
        </Box>
    )
}

export default Chat;