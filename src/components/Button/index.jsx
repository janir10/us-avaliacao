import { Stack,Button } from "@mui/material";

function ButtonComponent(props){
    
    const {title, type, link, color, Icon} = props;

    return(
        <Stack spacing = {2} direction='row'>
            <Button startIcon = {Icon} variant= {type} href={link} color = {color}>{title}</Button>
        </Stack>
    )
}

export default ButtonComponent;