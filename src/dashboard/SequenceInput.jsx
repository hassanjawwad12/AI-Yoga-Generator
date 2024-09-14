import {
  Stack,
  Box,
  HStack,
  VStack,
  Text,
  Spinner,
  Image,
} from "@chakra-ui/react";
//import yogi from '../assets/yogaboy.png'
import OrangeButton from "../components/OrangeButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useReducer, useState } from "react";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import { getSequenceCount, getUserId } from "../functions/auth";
import axios from "axios";

const initialSequence = {
  feeling: "",
  health: "",
  time: "15 mins",
  expertise: "Beginner",
  intensity: "Low",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_FEELING":
      return { ...state, feeling: payload };
    case "CHANGE_CONDITIONS":
      return { ...state, health: payload };
    case "CHANGE_TIME":
      return { ...state, time: payload };
    case "CHANGE_EXPERTISE":
      return { ...state, expertise: payload };
    case "CHANGE_INTENSITY":
      return { ...state, intensity: payload };
  }
};

const SequenceInput = () => {
  const stepNum = 5;
  const [sequenceCount, setSequenceCount] = useState(null);
  const [step, setStep] = useState(1);
  const [sequence, dispatch] = useReducer(reducer, initialSequence);

  const next = async () => {
    if (step < stepNum) setStep(step + 1);
    else {
      setLoading(true);
      const API = import.meta.env.VITE_API;
      const uuid = await getUserId();
      localStorage.setItem("input", JSON.stringify(sequence));
      try {
        const response = await axios.post(`${API}fetch_result`, {
          ...sequence,
          uuid,
        });
        const output = response?.data?.output?.content;
        localStorage.setItem("id", response?.data?.id);
        localStorage.setItem("sequence", output);
        if (output) window.location.href = "/output";
        setLoading(false);
      } catch (ex) {
        throw new Error(ex);
      }
    }
  };

  const prev = () => {
    if (step !== 1) setStep(step - 1);
  };

  const renderWithStep = () => {
    let name,
      label,
      placeholder,
      value,
      type = "text",
      radioOptions,
      buttonOptions;

    switch (step) {
      case 1:
        name = "CHANGE_FEELING";
        label = "How are you feeling today?";
        placeholder = "How are you feeling today? ";
        buttonOptions = ["high on energy", "tired", "well-rested"];
        value = sequence.feeling;
        break;
      case 2:
        name = "CHANGE_CONDITIONS";
        label =
          "Do you have any health conditions Sudha should consider while curating your practice?";
        placeholder = "type in your health condition for Sudha to consider";
        buttonOptions = [
          "back-pain",
          "stress",
          "insomnia",
          "anxiety",
          "hypertension",
          "muscle tightness",
        ];
        value = sequence.health;
        break;
      case 3:
        name = "CHANGE_TIME";
        label = "How long would you like to practice?";
        value = sequence.time;
        type = "";
        radioOptions = ["15 mins", "30 mins", "45 mins"];
        break;
      case 4:
        name = "CHANGE_EXPERTISE";
        label = "What is your level of expertise in yoga?";
        value = sequence.expertise;
        type = "";
        radioOptions = ["Beginner", "Intermediate", "Advanced"];
        break;
      case 5:
        name = "CHANGE_INTENSITY";
        label = "What level of intensity do you prefer?";
        value = sequence.intensity;
        type = "";
        radioOptions = ["Low", "High"];
    }

    return (
      <FormInput
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        radioOptions={radioOptions}
        buttonOptions={buttonOptions}
        dispatch={dispatch}
      />
    );
  };

  const [loading, setLoading] = useState(false);
  const yogaFacts = [
    {
      authorName: "Patanjali",
      quote:
        "When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bounds.",
    },
    {
      authorName: "B.K.S. Iyengar",
      quote:
        "Yoga teaches us to cure what need not be endured and endure what cannot be cured.",
    },
    {
      authorName: "K. Pattabhi Jois",
      quote: "Yoga is 99% practice and 1% theory.",
    },
    {
      authorName: "Paramahansa Yogananda",
      quote:
        "The body is your temple. Keep it pure and clean for the soul to reside in.",
    },
    {
      authorName: "Swami Sivananda",
      quote: "An ounce of practice is worth a ton of theory.",
    },
    {
      authorName: "Ramana Maharshi",
      quote:
        "Your own Self-Realization is the greatest service you can render the world.",
    },
    {
      authorName: "Swami Vivekananda",
      quote:
        "The world is the great gymnasium where we come to make ourselves strong.",
    },
    {
      authorName: "Sri Aurobindo",
      quote: "All life is yoga.",
    },
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(
    Math.floor(Math.random() * yogaFacts.length)
  );

  useEffect(() => {
    if (loading) {
      const intervalId = setInterval(() => {
        setCurrentFactIndex((prevIndex) => (prevIndex + 1) % yogaFacts.length);
      }, 6000);

      return () => clearInterval(intervalId);
    }
  }, [currentFactIndex, loading, yogaFacts.length]);

  useEffect(() => {
    getSequenceCount().then((count) => {
      if (count === null || count <= 0) {
        window.location.href = "/payment";
      } else {
        setSequenceCount(count);
      }
    });
  }, [sequenceCount]);

  return (
    <>
      <Header />
      {!loading && sequenceCount !== 0 ? (
        <Stack
          direction={{ base: "column", lg: "row" }}
          paddingTop={10}
          paddingX={{ xl: 20, "2xl": 10 }}
          width={"full"}
          height={"72vh"}
        >
          <VStack display={{ base: "none", lg: "flex" }} width={"70%"}>
            <Image src="pics6.png" w="100%" h="100%" alt={"yogi"} />
          </VStack>
          <VStack
            paddingLeft={{ lg: 6 }}
            justify={"space-between"}
            minH={"28rem"}
            w="full"
          >
            <ProgressBar progress={parseInt(step * (100 / stepNum))} />
            {renderWithStep()}
            <HStack w={"100%"} justify={step === 1 ? "end" : "space-between"}>
              {step !== 1 && (
                <OrangeButton
                  weight={"semibold"}
                  handleClick={prev}
                  type={"button"}
                  btnName={"Back"}
                  width={"8.5rem"}
                />
              )}
              <OrangeButton
                weight={"semibold"}
                handleClick={next}
                type={"button"}
                btnName={step === stepNum ? "Generate" : "Next"}
                width={"8.5rem"}
              />
            </HStack>
            <HStack w={"full"} justify={"center"} align={"center"}>
              <Text
                fontSize="md"
                textTransform={"uppercase"}
                letterSpacing={"widest"}
                fontWeight="bold"
                color="gray.500"
              >
                Your Sequence Count:
              </Text>
              <Box
                fontSize="md"
                textTransform={"uppercase"}
                letterSpacing={"widest"}
                fontWeight="bold"
                color="brand.200"
              >
                {sequenceCount ? sequenceCount : <Spinner size={"sm"} />}
              </Box>
            </HStack>
          </VStack>
        </Stack>
      ) : (
        <VStack
          width={"100%"}
          align={"center"}
          justify={"center"}
          h="85vh"
          py={4}
        >
          <Image src="waitingpose.png" w="auto" h="45%" alt={"yogi"} />
          <Text
            fontSize="md"
            textAlign="center"
            textTransform={"uppercase"}
            letterSpacing={"widest"}
            fontWeight="bold"
            color="gray.500"
          >
            As your personalized yoga sequence is being created, embrace this
            moment to be truly present. Settle into Sukhasana, gently close your
            eyes, and take these few minutes to center your mind and body in
            preparation for your yoga practice.
          </Text>

          <Spinner size={"lg"} color={"brand.200"} />
          <Text
            fontSize="md"
            textTransform={"uppercase"}
            letterSpacing={"widest"}
            fontWeight="bold"
            color="gray.500"
          >
            Your Sequence is being Generated
          </Text>
          <Text
            fontSize={["md", "md", "lg", "2xl"]}
            w={["80%", "80%", "80%", "70%"]}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight="bold"
            color="brand.500"
          >
            {yogaFacts[currentFactIndex].quote}
          </Text>
          <Text
            fontSize="md"
            textAlign={"right"}
            textTransform={"uppercase"}
            letterSpacing={"widest"}
            fontWeight="bold"
            color="gray.500"
            py={2}
          >
            - {yogaFacts[currentFactIndex].authorName}
          </Text>
        </VStack>
      )}
    </>
  );
};

export default SequenceInput;
