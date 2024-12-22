import React from 'react'
import { Stack, Divider } from '@mui/material'
import { DragIndicatorOutlined } from '@mui/icons-material'

const ResizableCustomHandle = ({hoverColer = '#3F77AF', topMargin = '0px', bottomMargin = '0px'}) => {

    return (
        <Stack
            sx={{
                height: '100%',
            }}
            alignItems={'center'}
        >
            <Divider
                orientation='vertical'
                variant='middle'
                textAlign='center'
                sx={{
                    marginTop: topMargin,
                    width: '0px',
                    zIndex: 1000,
                    '&:hover, &:active': {
                        "&::before, &::after": {
                            borderColor: hoverColer,
                            borderWidth: '5px'
                        },
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <Stack>
                    <DragIndicatorOutlined color='action' sx={{ width: '20px', color: hoverColer }} />
                </Stack>
            </Divider>
        </Stack>

    )
}

export default ResizableCustomHandle
