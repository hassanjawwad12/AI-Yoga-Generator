import { getPlan, isAuthenticated } from "../functions/auth";
import { VStack, Text, Button, Stack,HStack, Spinner,Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../components/Header";
import OrangeButton from "../components/OrangeButton";
import Footer from "../components/Footer";

export default function Profile() {
  const [loading, setLoading] = React.useState(false);
  const [plan, setPlan] = React.useState("");
  const getPaymentDetails = async () => {
    setLoading(true);
    const token = await isAuthenticated();
    const retUrl = "https://www.sudha.app/dashboard";
    const baseUrl = import.meta.env.VITE_API;

    const response = await fetch(`${baseUrl}getpaymentlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: token,
        ret_url: retUrl,
      }),
    });

    const data = await response.json();
    if (data.link.url != null) {
      window.location.href = data.link.url;
    }
    setLoading(false);
  };

  useEffect(() => {
    getPlan().then((data) => {
      if (data === 1) {
        setPlan("Basic");
      } else if (data === 2) {
        setPlan("Standard");
      } else {
        setPlan("Premium");
      }
    });
  }, [plan]);

  const goToPricing = () => {
    window.location.href = "/payment";
  };

  return (
    <VStack
      w={"full"}
      minHeight={"100vh"}
      background={"brand.100"}
      paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, "2xl": 56 }}
      paddingY={10}
      color={"brand.500"}
    >
      <Header />
      <Text mt={"12"} fontWeight={"bold"} fontSize={"xl"} letterSpacing={2}>
        PROFILE
      </Text>

      <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={4}
     align="center"
     w="100%"
        
    >
        <Image src="pics4.png" w={['85%','85%','80%','50%']} h="50%" alt={"yogi"} />

        <VStack mt={"12"} spacing={"4"} w={['85%','85%','80%','30%']} h="30%" >
          <HStack fontWeight={"bold"} fontSize={"lg"}>
            <Text as={"span"} mr={"2"}>
              You&apos;ve currently subscribed :
            </Text>
            <Text as={"span"} color={"brand.200"}>
              {plan ? plan : <Spinner />}
            </Text>
          </HStack>
          <OrangeButton
            loading={loading}
            mt={"12"}
            handleClick={() => getPaymentDetails()}
            btnName="Manage your subscription"
          />
          <Button
            mt="12"
            isLoading={loading}
            marginTop={{ base: 5, lg: 0 }}
            background={"gray.200"}
            color={"black"}
            borderRadius={"full"}
            padding={5}
            size={"sm"}
            w={"100%"}
            _hover={{
              background: "gray.400",
            }}
            onClick={() => goToPricing()}
          >
            Pricing
          </Button>
        </VStack>
      </Stack>
      <Footer />
    </VStack>
  );
}

/* 
      isLoading={loading} */
