import React ,{useState}from 'react'
import style from "../Style/Signup.module.css"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
  
    Select,
 FormLabel,

 Button ,
 Input,
 useDisclosure,
 Stack,
 
 
  } from '@chakra-ui/react'
 
const SignUp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [role, setRole] = useState("");
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }else {
      alert("Account is Created")
    }
    const userData = {
      username,
      email,
      DOB,
      role,
      location,
      password,
    };
    console.log(userData)
  let res=await fetch("/posts",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      email,
      DOB,
      role,
      location,
      password,
    })
  })
  let data=await res.json()
  console.log(data)
  }
  return (
    <div>
       <>
      <Button className={style.signup} colorScheme='teal' onClick={onOpen}>
        SignUp
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        
      >
        
        <DrawerOverlay />
        <DrawerContent>
         
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody method="POST">
            <Stack spacing='24px'>
              
              <Box >
                <FormLabel >Username</FormLabel>
                <Input
                type="text"
                value={username} onChange={(event) => setUsername(event.target.value)} 
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>
              <Box>
                <FormLabel >Email</FormLabel>
                <Input
                type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                 
                 
                  placeholder='Please enter Email'
                />
              </Box> <Box>
                <FormLabel >DOB</FormLabel>
                <Input
                value={DOB} onChange={(event) => setDOB(event.target.value)}
                type="date"
                  ref={firstField}
                  
                  placeholder='Please enter user Date'
                />
              </Box> 
             

              <Box>
                <FormLabel>Select Owner</FormLabel>
                <Select value={role} onChange={(event) => setRole(event.target.value)}  >
                  <option value='Frontend'>Frontend</option>
                  <option value='Backend'>Backend</option>
                  <option value='Full stack '>Full stack </option>
                  <option value='Java developer'>Java Developer</option>
                </Select>
              </Box>
              <Box>
                <FormLabel >Location</FormLabel>
                <Input
                type="text" value={location} onChange={(event) => setLocation(event.target.value)}
                  ref={firstField}
                 
                  placeholder='Please enter user name'
                />
              </Box>
              <Box>
                <FormLabel >Password</FormLabel>
                <Input
                 type="password" value={password} onChange={(event) => setPassword(event.target.value)} 
                  ref={firstField}
                 
                  
                  placeholder='Please enter user name'
                />
              </Box>
              <Box>
                <FormLabel >Confirm Password</FormLabel>
                <Input
                type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                  ref={firstField}
                  
                  
                  placeholder='Please enter user name'
                />
              </Box>
             
            </Stack>
            <Button type='submit'>Submit</Button>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose} >
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={handleFormSubmit} >Submit</Button>
           
          </DrawerFooter>
          
       
        </DrawerContent>
      </Drawer>
    </>
    </div>
  )
}

export default SignUp