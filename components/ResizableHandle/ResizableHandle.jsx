import React from "react";
import { Stack, Divider } from "@mui/material";
import { DragIndicatorOutlined } from "@mui/icons-material";

const ResizableCustomHandle = ({
    width = '0px',
    height = '100%',
    hoverColor = '#3F77AF',
    topMargin = '0px',
    bottomMargin = '0px'
}) => {
    const dividerSx = {
        marginTop: topMargin,
        width: '0px',
        zIndex: 1000,
        '&:hover, &:active': {
            '&::before, &::after': {
                borderColor: hoverColor,
                borderWidth: '5px'
            },
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Stack
            sx={{
                height: '100%',
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
                        sx={{ width: '20px', color: hoverColor }} 
                    />
                </Stack>
            </Divider>
        </Stack>
    )
}

export default ResizableCustomHandle