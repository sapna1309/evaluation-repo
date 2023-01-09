//import Head from 'next/head'
import { Box, Button, Center, Heading, HStack, Link, Stack,Text } from '@chakra-ui/react';
import Image from 'next/image'
import { useEffect } from 'react';
import Projects from './projects';
//import { Inter } from '@next/font/google'
//import styles from '../styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home(data) {
  //console.log("Data",data);
  // const getData =async()=>{
  //  try {
  //   let res = await fetch(`https://api.github.com/users/sapna1309`);
  //   let data = await res.json();
  //   //console.log(data.avatar_url);
  //  } catch (error) {
  //   console.log(error);
  //  }
  // }
 
  // useEffect(()=>{
  //   getData()
  // },[])
  return (
    <Box mt={3} >
    <HStack w={"100%"} spacing={3} >
      <Stack width={"50%"} >
        <Image src={data.deta.avatar_url}  height={150} width={150} alt={data.deta.name}  />
        <Text 
          fontWeight={"semibold"}
          fontSize={"xl"}
          color={"teal"}
         >{data.deta.name}</Text>
          <HStack>
         <Link href="https://drive.google.com/file/d/1-IMw6yhKYIEEIGBw-iVlnAtmCRMV9WBs/view?usp=sharing" ><Button bg={"teal"} >Resume</Button></Link>
         <Link href={data.deta.html_url}><Button bg={"teal"} >Follow</Button></Link>
         </HStack>
         <Text 
          fontWeight={"semibold"}
          fontSize={"xl"}
          color={"teal"}
          >{data.deta.bio}</Text>
          <HStack>
            <Heading size={"md"} >Tech Stack :</Heading>
            <Text 
          fontWeight={"semibold"}
          fontSize={"xl"}
          color={"teal"}
          >HTML | CSS | JavaScript | Next JS | React JS | Node JS</Text> </HStack>
          <Heading size={"md"} >Education:</Heading>
          <HStack>
          <Text 
          fontWeight={"semibold"}
          fontSize={"xl"}
          color={"teal"}
          >Full Stack Web development</Text> 
          <Text>({data.deta.company})</Text>
          </HStack>
          <HStack>
          <Text 
          fontWeight={"semibold"}
          fontSize={"xl"}
          color={"teal"}
          >B.A. Honours</Text> 
          <Text>(Political Science)</Text>
          </HStack>
      </Stack>
     <Stack width={"50%"} >
       {/* <Projects/> */}
     </Stack>
      </HStack> 
     
    </Box>
  )
}

export async function getStaticProps(){
  let res = await fetch(`https://api.github.com/users/sapna1309`);
  let d = await res.json();
  //console.log("D",d);
  return{
    props:{
      deta:d
    }
  }
}
