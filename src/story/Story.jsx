import CustomHeading from "../components/Headings";
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import CustomFooter from "../components/CustomFooter";

const Story = () => {
  const gradientTextContainerStyle = {
    background: `linear-gradient(150deg, #E2A80A 0%, #F07B3F 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    fontWeight: "bold", // Make the text bolder
  };

  const story = [
    "SudhaApp is the culmination of a shared passion for well-being and mindfulness. In a fast-paced world, we recognized the need to bring the ancient practice of yoga to the modern lifestyle. Our journey began with a simple idea - to create a user-friendly platform that empowers individuals to find balance, serenity, and health. We are committed to making yoga accessible to all, fostering a sense of community, and supporting you on your path to a more peaceful and mindful life. Welcome to SudhaApp, where ancient wisdom meets contemporary convenience, and where your well-being takes center stage.",
  ];

  return (
    <>
      <Flex
        w={"full"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minH={"100vh"}
        position={"relative"}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "15",
            mb: "10",
          }}
        >
          <CustomHeading
            type="primary"
            fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "8xl" }}
            lineHeight={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            sx={gradientTextContainerStyle}
            text="Our Story"
          />
          <Box maxW="container.lg" py={4} px={8} mb={20}>
            <Text
              textAlign={"center"}
              letterSpacing={["0.09em", "0.04em", "0.03em", "0.02em"]}
              fontFamily="fonts.text"
              fontSize={["md", "md", "lg", "lg"]}
              color="brand.500"
            >
              {story}
            </Text>
          </Box>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Story;

/* <Footer /> */
