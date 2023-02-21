import { Button, useColorMode } from '@chakra-ui/react'

export default function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button className='toggleColorMode'  onClick={toggleColorMode}>
    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>

  )
}
