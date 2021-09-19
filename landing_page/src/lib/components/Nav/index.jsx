import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import {
    Drawer,
    DrawerBody,
    Stack,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from "@chakra-ui/react"

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button
        rounded={'full'} 
        onClick={onOpen} 
        ref={btnRef} 
        position={'fixed'} 
        top={6} left={6}
        cursor='pointer'
        bg={'whiteAlpha.300'}
        color={'white'}
        _hover={{ bg: 'whiteAlpha.500' }}
        leftIcon={<FaCode/>}>
            Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack>
                <Link to="/"><Button w='100%' leftIcon={<AiOutlineHome/>}>Home</Button></Link>
                <Link to="/contact"><Button w='100%' leftIcon={<BsPerson/>}>Contact</Button></Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
