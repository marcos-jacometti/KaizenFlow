import React from "react";
import { BackgroundLogo, Container, Inputs, Log } from "./styles";
import { FaLock, FaUser } from "react-icons/fa";
import Input from "../../components/common/input";
import Button from "../../components/common/button";

export default function Login(){
    return(
        <Container>
            <Log>
                <BackgroundLogo />
                <Inputs>
                    <Input 
                        icon={<FaUser />} 
                        type="text"
                        placeholder="Username" 
                        id="username"
                    />
                    <Input 
                        icon={<FaLock />}
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                    <Button 
                        title="Enter" 
                        background="#8906E680"
                        border="none"
                    
                    />
                </Inputs>
            </Log>
        </Container>
    );
}