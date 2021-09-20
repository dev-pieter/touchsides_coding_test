import { useState } from 'react';
import {
  Stack,
  HStack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Textarea,
  Center
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

export default function Simple() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      minW={'100%'}
      align={'center'}
      justify={'center'}
      bg={'gray.800'}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Send me a message
        </Heading>
        <Stack
          as={'form'}
          spacing={'12px'}
          onSubmit={e => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <Stack>
                <HStack>
                    <Input type="text" id={'name'} placeholder={'Name'}></Input>
                    <Input type="text" id={'last_name'} placeholder={'Last Name'}></Input>
                </HStack>
                <Input
                variant={'solid'}
                borderWidth={1}
                id={'email'}
                type={'email'}
                required
                placeholder={'Your Email'}
                aria-label={'Your Email'}
                value={email}
                disabled={state !== 'initial'}
                onChange={e =>
                    setEmail(e.target.value)
                }
                />
                <Textarea id={'message'} placeholder={'Message'}></Textarea>
            </Stack>
          </FormControl>
          <Center>
            <FormControl w={{ base: '100%', md: '40%' }}>
                <Button
                colorScheme={state === 'success' ? 'green' : 'blue'}
                isLoading={state === 'submitting'}
                w="100%"
                type={state === 'success' ? 'button' : 'submit'}>
                {state === 'success' ? <FaCheck /> : 'Submit'}
                </Button>
            </FormControl>
          </Center>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}