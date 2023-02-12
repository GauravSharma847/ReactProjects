import React from 'react'
import {Drawer,
        DrawerBody, 
        DrawerContent,
        DrawerCloseButton,
        DrawerHeader, 
        DrawerOverlay,
        Button,
        useDisclosure,
        VStack,
        HStack
        } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'   // it imports the bi meny from eract icons  (its like a menu bar)
const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();   // isOpen -> tells if drawer is open, onOpen -> drawer will open on this call,  onClose -> drwaer will close on this call
  return (
    <>
    <Button 
        zIndex={'overlay'}
        pos={'fixed'}
        top = {4}
        left = {4}
        colorScheme={'purple'}
        p = {0}
        w = {10}
        h = {10}
        borderRadius ={'full'}
        onClick= {onOpen}
     >
        <BiMenuAltLeft size ={20}/>
    </Button>

    <Drawer isOpen = {isOpen} placement="left" onClose = {onClose}>
        <DrawerOverlay />    
        <DrawerContent>   {/* Gives the drawer ehere content will be there*/}
        <DrawerCloseButton />     {/*  add the close button on drawer*/}
            <DrawerHeader>Video Hub</DrawerHeader>     {/* Name on te drawer*/}

            <DrawerBody>
                <VStack alignItems={'flex-start'}>    {/* its a dive whose direction is column and align-item is  center */}

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}> {/* we gave onclic = {onclosse to close drawer after any button get clicked} */}
                    <Link to ={"/"}>Home</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to ={"/videos"}>Videos</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to ={"/videos?category=free"}>Free Videos</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to ={"/upload"}>Upload Videos</Link>
                </Button>
                </VStack>

                <HStack 
                    pos = {'absolute'}
                    bottom={10}
                    left={0}
                    w = {'full'}
                    justifyContent = {'space-evenly'}
                >    {/* it remain raw it has no property attached to it*/}
                    <Button onClick = {onClose} colorScheme={'purple'}>
                        <Link to = "/login">Log In</Link>
                    </Button>

                    <Button onClick = {onClose} colorScheme={'purple'} variant = "outline">
                        <Link to ="/signup">Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header