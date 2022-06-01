import React from "react";
import { Snackbar} from "@mui/material";

function ErrorAlert({text}){
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return(
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={text}
        />
    )
}

export default ErrorAlert;
