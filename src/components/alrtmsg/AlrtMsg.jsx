import React from 'react'
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function AlrtMsg({ handleClose, color, msg , open }) {

    return (
        <div>

            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}>
                <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}
