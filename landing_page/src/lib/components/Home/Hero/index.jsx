import {
    Stack,
    Flex,
    Button,
    Heading,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
  
export default function Hero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Heading>
              Pieter Nortje | Software Engineer
            </Heading>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                leftIcon={<FaGithub/>}>
              GitHub
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                leftIcon={<FaLinkedinIn/>}>
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
}
