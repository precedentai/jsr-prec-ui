import React from "react";
import { Stack, Divider } from "@mui/material";
import { DragIndicatorOutlined } from "@mui/icons-material";

const ResizableHandle = ({
    marginTop='0px',
    hoverColor='#232941',
    borderWidth='5px',
    height='100%',
}) => {
    const dividerSx = {
        marginTop,
        width: '0px',
        zIndex: 1000,
        '&:hover, &:active': {
            '&::before, &::after': {
                borderColor: hoverColor,
                borderWidth
            },
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Stack
            sx={{
                height
            }}
            alignItems="center"
        >
            <Divider
                orientation="vertical"
                variant="middle"
                textAlign="center"
                sx={dividerSx}
            >
                <Stack>
                    <DragIndicatorOutlined 
                        color="action" 
                        sx={{ width: '20px' }} 
                    />
                </Stack>
            </Divider>
        </Stack>
    )
}

export default ResizableHandle