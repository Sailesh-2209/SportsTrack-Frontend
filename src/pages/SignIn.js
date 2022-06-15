import React from "react";
import { useState } from "react";
import { 
    Box,
    Flex,
    Heading,
    Avatar,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    chakra,
    Link,
    Button
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

import { checkEmail, checkPassword } from "../helpers/validators";
import { types } from "../constants/types";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CIoMail = chakra(IoMail);
const CAiOutlineEye = chakra(AiOutlineEye);
const CAiOutlineEyeInvisible = chakra(AiOutlineEyeInvisible);

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFormSubmit = () => {
        let emailErrorObj = checkEmail(email, types.SIGNIN);
        if (emailErrorObj.error) {
            setEmailError(emailErrorObj.message);
            return;
        }
        let passwordErrorObj = checkPassword(email, password, types.SIGNIN);
    }

    return (
        <Flex
            bg="gray.100"
            w="100vw"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box>
                <Avatar bg="red.500" />
            </Box>
            <Box>
                <Heading
                    color="red.500"
                >
                    Welcome
                </Heading>
            </Box>
            <Stack spacing={3} m={5} p={5} borderRadius={15} bg="white" >
                <InputGroup>
                    <InputLeftElement children={<CIoMail color="gray.300" />} />
                    <Input 
                        placeholder="email" 
                        size="md" 
                        border="1px solid gray" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={<CFaLock color="gray.300" />} />
                    <Input 
                        placeholder="password" 
                        type={showPassword ? "text" : "password"} 
                        size="md" value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <InputRightElement onClick={() => {setShowPassword(!showPassword)}} >
                        {showPassword ? <CAiOutlineEyeInvisible color="gray.500" /> : <CAiOutlineEye color="gray.500" />}
                    </InputRightElement>
                </InputGroup>
                <Link pl="1" fontSize={14} href="https://localhost:5000/forgotpassword" isExternal>Forgot Password?</Link>
                <Button colorScheme="red" onClick={() => handleFormSubmit()}>Sign In</Button>
            </Stack>
            <Box>Do not have an account? <Link as={RouterLink} to="signup" color="red.500">Sign Up</Link></Box>
        </Flex>
    );
}

export default SignIn;

