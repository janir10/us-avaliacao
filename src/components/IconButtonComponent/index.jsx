import { IconButton, Stack } from "@mui/material";

function IconButtonComponent(props){
    
    const { Icon, color} = props;

    return(
        <Stack spacing = {2} direction='row'>
            <IconButton>
                <Icon color = {color} />
            </IconButton>
        </Stack>
    )
}

export default IconButtonComponent;



