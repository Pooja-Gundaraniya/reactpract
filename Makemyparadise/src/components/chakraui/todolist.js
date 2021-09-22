import React from 'react'
import { VStack,HStack,Text, StackDivider,Spacer, Badge } from '@chakra-ui/layout'
import {FaTrashAlt} from "react-icons/fa"
import { IconButton } from '@chakra-ui/button';

export default function Todolist({todos,deleteTodos}) {
    if(!todos.length)
    {
        return(
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
            no todos. yay!!!
        </Badge>
        )
    }
    return (
    <VStack
        divider={<StackDivider/>}
        borderColor="gray.100"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxWidth={{base:'90vw',sm:'80vw',lg:'50vw',xl:'40vw'}}
        alignItems="stretch"
    >
        {todos.map(todos=>(
            <HStack key={todos.id}>
            <Text>{todos.body}</Text>
            <Spacer/>
            <IconButton icon={<FaTrashAlt/>} isRound="true" onClick={()=>deleteTodos(todos.id)}></IconButton>
            </HStack>

        ))}
    </VStack>
    )
}
