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
import { FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const CFaLock = chakra(FaLock);
const CAiOutlineMail = chakra(AiOutlineMail);
const CAiOutlineEye = chakra(AiOutlineEye);
const CAiOutlineEyeInvisible = chakra(AiOutlineEyeInvisible);

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

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
                    <InputLeftElement children={<CAiOutlineMail color="gray.300" />} />
                    <Input placeholder="email" size="md" border="1px solid gray" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={<CFaLock color="gray.300" />} />
                    <Input placeholder="password" type={showPassword ? "text" : "password"} size="md" />
                    <InputRightElement onClick={() => {setShowPassword(!showPassword)}} >
                        {showPassword ? <CAiOutlineEyeInvisible color="gray.500" /> : <CAiOutlineEye color="gray.500" />}
                    </InputRightElement>
                </InputGroup>
                <Link pl="1" fontSize={14} href="https://localhost:5000/forgotpassword" isExternal>Forgot Password?</Link>
                <Button colorScheme="red">Sign In</Button>
            </Stack>
            <Box>Already have an account? <Link as={RouterLink} to="/" color="red.500">Sign In</Link></Box>
        </Flex>
    );
}

export default SignUp;

