import { BoxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'

const Center: FC<BoxProps> = (props) => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" {...props} />
)

export default Center
