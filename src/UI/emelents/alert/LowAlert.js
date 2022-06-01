import React from "react";
import {Snackbar} from "@mui/material";

function LowAlert({text, bottom = '-170px', left="0%"}){
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
        return(
              <Snackbar
                    style={{marginBottom: bottom, marginLeft: left}}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message={text}
                />
        )
}

export default LowAlert;
