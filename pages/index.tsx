// import Head from 'next/head'

import { FormEvent, useState } from 'react'
import axios from 'axios';


import { Flex, Image, Button, Text, Link } from '@chakra-ui/core'
import Input from './components/Input'
import Divider from './components/Divider'


export default function Home() {
  
  const [email,setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
      axios.post('/api/subscribe', { email });
    }
    

  return (
    <Flex
    as="main"
    height="100vh"
    justifyContent="center"
    alignItems="center"
  >
    <Flex
      as="form"
      onSubmit={handleSignUpToNewsletter}
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      padding={8}
      marginTop={4}
      width="100%" 
      maxW="400px"
    >
      <Image marginBottom={8} src="/rocketseat.svg" alt="Rocketseat" />

      <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
        Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre programação!
      </Text>

      <Input
        placeholder="Seu melhor e-mail"
        marginTop={2}
        value={email}
        onChange={e => setEmail(e.target.value)}
        isRequired
        type="email"
        onKeyUp={e => e.target.setCustomValidity("")}
        onInvalid={e => e.target.setCustomValidity("Email Inválido")}        />

      <Button
        type="submit"
        backgroundColor="purple.500"
        height="50px"
        borderRadius="sm"
        marginTop={6}
        _hover={{ backgroundColor: 'purple.600' }}
      >
        INSCREVER
      </Button>

      <Divider />

      <Link
      color="purple.600"
       href="/"
       _hover={{color: 'purple.500'}}
      >
Cadastrar
        </Link>

    </Flex>
  </Flex>
  )
}