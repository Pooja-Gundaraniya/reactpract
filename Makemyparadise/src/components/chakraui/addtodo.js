
import { Input } from '@chakra-ui/input'
import { HStack,Button,useToast } from '@chakra-ui/react'
import {useState} from 'react'
import { nanoid } from 'nanoid'

export default function Addtodo({addTodos}) {
const toast=useToast()

    function handlesubmit(e){
        e.preventDefault();
        if(!content)
        {
            toast({
                title: "no contents.",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
            return
        }
        const todo ={
            id:nanoid(),
            body:content
        };
        addTodos(todo);
        setContent("");
    }
    const [content, setContent] = useState("")
    return (
        <form onSubmit={handlesubmit}>
            <HStack mt="4">
                <Input variant="filled" placeholder="add todo" value={content} onChange={(e)=>setContent(e.target.value)}/>
                <Button colorScheme="pink" px="8" type="submit">add Todo</Button>
            </HStack>
        </form>
    )
}
