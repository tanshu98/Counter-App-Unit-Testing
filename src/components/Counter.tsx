import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter:React.FC<{}> = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = ()=> {
        setCount(prevCount => prevCount + 1);
    }
    const decrementHandler = ()=> {
        if(count > 0) 
        setCount(prevCount => prevCount -1)
    }
    const restartHandler = ()=> {
        setCount(0);
    }

  return (
    <Stack direction="row" justifyContent="center"  >
        <Paper elevation={2} sx={{p:2,mt:3, display: 'flex', flexDirection: 'column', gap:2, width:230}}>
        <Typography data-testid="count" variant='h3'>Count {count} </Typography>
        <Button data-testid="increment" onClick={incrementHandler} variant='contained'>Increment</Button>
        <Button data-testid="decrement" onClick={decrementHandler} variant='contained'>Decrement</Button>
        <Button data-testid="restart" onClick={restartHandler} variant='contained'>Restart</Button>
        </Paper>
    </Stack>
  )
}

export default Counter