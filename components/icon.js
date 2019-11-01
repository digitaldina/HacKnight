import React from 'react'
import { Box } from 'rebass'
import Icon from '@hackclub/icons'

export default ({ sx, ...props }) => (
  <Box sx={{ lineHeight: 0, color:'#FFDC89'  }}>
    <Icon {...props} />
  </Box>
)