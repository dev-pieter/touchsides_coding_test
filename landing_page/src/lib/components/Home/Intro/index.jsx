import React from 'react'
import { Center, Stack, Heading, Text } from '@chakra-ui/react'

export default function Intro() {
    return (
        <Center>
            <Stack spacing={6} textAlign={'center'}>
                <Heading>Intro</Heading>
                <Text textAlign={'justify'} maxW='80vw' fontSize="xl">I am a very passionate programmer with a mind for creating innovative and efficient code through the utilization of simplistic yet intricate methods. I am an independent individual, able to follow established procedures and work under little to no supervision.</Text>
            </Stack>
        </Center>
    )
}
