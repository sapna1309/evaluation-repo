import { Grid,Heading,Stack,Text } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link';
const Projects = (data) => {
    let d = data.data.items
    //console.log("r",d);
  return (
    <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={10}>
    {d.length!==0 && d?.map((el)=>(
        // console.log(el)
         <Stack key={el.id} spacing={3} border={"1px solid black"} >
         <Link href={el.html_url} ><Heading size={"md"}  _hover={{textDecoration:"underline",color:"teal",cursor:"pointer"}} >{el.name}</Heading></Link>
         <Text>Star Count : {el.stargazers_count}</Text>
         <Text>Forks Count : {el.forks_count}</Text>
         <Text>Language : {el.language}</Text>
        </Stack>
        
    ))} 
    </Grid>
  )
}

export default Projects


export async function getServerSideProps(){
    let res= await fetch(`https://api.github.com/search/repositories?q=user:sapna1309+fork:true&sort=updated&per_page=10&type=Repositories`);
    let d = await res.json();
    return{
        props:{
            data:d
        }
    }
}