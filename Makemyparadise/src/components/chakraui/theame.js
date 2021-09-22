import React from 'react'
import{MoonIcon,SunIcon} from "@chakra-ui/icons"
import {useColorMode,Stack,Center,IconButton,Button} from "@chakra-ui/react";

const Theme=()=> {
    const{colorMode,toggleColorMode} = useColorMode();
    return (
       <Center h="100vh" maxw="1200px" mx="auto">
           <Stack isInline>
            <IconButton
            icon={colorMode==="light"?<SunIcon/>:<MoonIcon/>}
            variant="outline"
            colorScheme="red"
            aria-label="Color mode switcher"
            onClick={toggleColorMode}
            >
                switch Mode
            </IconButton>
            <Button variant="solid" colorScheme="blue">
                Solid
            </Button>
            <Button variant="solid" bg="second">
                Primary color
            </Button>
            <Button variant="solid">
                Primary color
            </Button>
           </Stack>
       </Center>
    );;
}
export default Theme;