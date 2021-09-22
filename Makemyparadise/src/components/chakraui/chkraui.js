import React from "react";
import { Heading } from "@chakra-ui/layout";
import Todolist from "./todolist";
import Addtodo from "./addtodo";
import { VStack, IconButton,useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useState,useEffect } from "react";

const Chakra = () => {
    const [todos,setTodos]=useState(
        ()=>JSON.parse(localStorage.getItem("todos"))||[]
    );
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    function deleteTodos(id){
        const newTodos=todos.filter(todo=>{
            return todo.id !== id
        })
        setTodos(newTodos)
    }
    function addTodos(todo){
        setTodos([...todos,todo])
    }
    const{colorMode,toggleColorMode}=useColorMode();
    return (
        <>
            <VStack p={4}>
                <IconButton icon={colorMode==="light" ? <FaSun/> : <FaMoon/>} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode}/>
                <Heading 
                mb="8"
                 fontWeight="extrabold" 
                 size="2xl"
                  bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
                  bgClip="text"
                  >
                  Todo Application
                  </Heading>
                <Todolist todos={todos} deleteTodos={deleteTodos} />
                <Addtodo addTodos={addTodos} />
            </VStack>
        </>
    )
}
export default Chakra;