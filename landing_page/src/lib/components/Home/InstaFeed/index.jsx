import React from 'react'
import { SimpleGrid, Box, Center, Image, Stack, Heading, Button } from "@chakra-ui/react"
import axios from 'axios'
import { useQuery } from 'react-query'
import { FaInstagram } from 'react-icons/fa'

const URL = `https://graph.instagram.com/me/media?fields=media_type,media_url&access_token=${'IGQVJVNUQ2TERMTDNIajJyWkFfS3RoeXZAtcm5BNmJ3Vmp5dTY2c2FtR2tFMFFGejAxTXBzNHRPZAVZAHZA0JDMnByU2dOaGhzeC1CdVFTSVRkOG5sbjJOTkI3czF5cEtLU1hZAbi1jOW5R'}`

export default function InstaFeed() {
    const instaFeed = useQuery(["instafeed"], async() => {
        const res = await axios.get(URL);
        return res.data;
    }, {
        staleTime: 500000
    })

    return (
        <Center>
            <Stack spacing={6} textAlign='center' mb='50px'>
                <Heading>{'<My Life/>'}</Heading>
                <SimpleGrid columns={[1,null,3]} spacing={5}>
                    {instaFeed.isLoading ? null :
                        instaFeed.data.data.map((x, idx)=> (
                            <Box width="300px" height="300px" overflow='hidden'>
                                <Image src={x.media_url}></Image>
                            </Box>
                        ))
                    }
                </SimpleGrid>
                <Center>
                <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    _hover={{ bg: 'blue.500' }}
                    leftIcon={<FaInstagram/>}>
                See More
                </Button>
                </Center>
            </Stack>
        </Center>
    )
}
