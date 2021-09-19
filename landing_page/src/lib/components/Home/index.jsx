import React from 'react'
import InstaFeed from './InstaFeed'
import Hero from './Hero'
import Intro from './Intro'
import { Stack } from '@chakra-ui/react';



export default function Home() {

    return (
        <Stack spacing={20} bg={'gray.900'} textColor={'white'}>
            <Hero/>
            <Intro/>
            <InstaFeed/>
        </Stack>
    )
}
