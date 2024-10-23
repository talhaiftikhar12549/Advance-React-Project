import React from "react";
import { Avatar, AvatarGroup, Heading, VStack, } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <AvatarGroup>
      <Avatar size="2xl" name="Sage" src="https://bit.ly/sage-adebayo" />

    </AvatarGroup>
    <Heading size="md">Hello, I am pete!</Heading>
    <Heading size="xl">A frontend developer specialised in React</Heading>
    {/*<p>Pete • © 2022</p>*/}
  </FullScreenSection>
);

export default LandingSection;
