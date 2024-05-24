import { Button, DialogTitle, Input, Modal, ModalDialog, Stack } from "@mui/joy";
import { useState } from "react";
import { useChangeDisplayDetailsMutation } from "../../api/authService";
import { DisplayModalType } from "../../model/pages";


const DisplayModal = ({open, displayName, onClose}: DisplayModalType) => {

    const [name, setName] = useState(displayName);
    const [changeDisplayDetails] = useChangeDisplayDetailsMutation()
    const submitDisplayName = async () => {
        const display: any = await changeDisplayDetails({displayName: name})
        if(display) {
            const user = JSON.parse(localStorage.getItem('user') as string)
            user.displayName = display.data.displayName;
            localStorage.setItem('user', JSON.stringify(user))
            onClose()
        }
    }

    return (
        <Modal open={open}>
            <ModalDialog>
                <DialogTitle>Add your display name</DialogTitle>
                <Stack spacing={2}>
                    <Input autoFocus required value={name} onChange={(e) => setName(e.target.value)} />
                    <Button onClick={submitDisplayName}>Submit</Button>
                </Stack>
            </ModalDialog>
        </Modal>
    )
}

export default DisplayModal;