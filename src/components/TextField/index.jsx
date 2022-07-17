import {Stack, TextField} from '@mui/material';

function TextField(props) {

    const {label, variant, color, size, helperText, type} = props;
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label = {label} variant = {variant} color = {color} size = {size}
                helperText = {helperText} type = {type}/>
            </Stack>
        </Stack>
    );
}

export default TextField;
