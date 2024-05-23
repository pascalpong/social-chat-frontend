import { Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack } from "@mui/joy"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";


const CreateRoom = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [ roomName, setRoomName ] = useState<string>("")
    const createRoom = () => {
        console.log(roomName)
        setOpen(false);
    }

    return (
        <>
        <Button
            size="lg"
            variant="outlined"
            startDecorator={<AddCircleOutlineIcon/>}
            onClick={() => setOpen(true)}
        >
            Create Room
        </Button> 
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
            <DialogTitle>Create new Room</DialogTitle>
            <DialogContent>Fill in the information of the project.</DialogContent>
            <Stack spacing={2}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required onChange={e => setRoomName(e.target.value)}/>
            </FormControl>
            <Button onClick={() => createRoom() }>Submit</Button>
            </Stack>
            </ModalDialog>
        </Modal>
        </>
    )

}

export default CreateRoom;