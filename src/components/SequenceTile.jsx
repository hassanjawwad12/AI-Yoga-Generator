import { Box, Flex, Text, Image, Spinner } from "@chakra-ui/react";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs"; // Import the play button icon
import { convertTextToVoice } from "../functions/audio";
import { useState, useEffect, useRef } from "react";

const SequenceTile = (props) => {
  const paragraphs = props.text.split(".");
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const audioRef = useRef(null);
  
  const decrementTime = (time) => {
    // 1st check if time is in seconds or minutes
    if (time.includes("min")) {
      time = parseInt(time) * 60;
    } else {
      time = parseInt(time);
    }

   // if (props.currentA === props.key) {
 
    // Decrement time with each second
    const interval = setInterval(() => {
      time--;
      setCurrentTime(time + "s");
      if (time <= 0) {
        clearInterval(interval);
        setCurrentTime(null);
        setPlaying(false);
        props.onDone();
      }
    }, 1000);
    setIntervalId(interval);
    return () => clearInterval(interval);

  //}



  };

  /*  const audioSrc = `
  <audio controls>
    <source src="data:audio/mp3;base64,${audio}" type="audio/mp3">
    <source src="data:audio/aac;base64,${audioAAC}" type="audio/aac">
  </audio>
`// <source src="data:audio/aac;base64,${audioAAC}" type="audio/aac">
    setAudio(audioSrc);
    setLoading(false);
    setPlaying(true);
  };*/

  /*const playAudio = async () => {
    if (props.currentA !== props.key) {
      props.setCurrentA(props.key);
      setLoading(true);
      const audio = await convertTextToVoice(props.text);
      // Use MP3 format for Android
      const audioSrc = `data:audio/mp3;base64,${audio}`;    
      setAudio(audioSrc);
      setLoading(false);
      setPlaying(true);
    }
  };*/

  const playAudio = async () => {
    if (props.currentA !== props.key) {
      props.setCurrentA(props.key);
      setLoading(true);
      const audio = await convertTextToVoice(props.text);
      let audioSrc;
      const userAgent = navigator.userAgent;
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Convert audio to WAV format for iOS
        const wavAudio = convertToWav(audio);
        audioSrc = `data:audio/wav;base64,${wavAudio}`;
      } else {
        // Use MP3 format for Android and other platforms
        audioSrc = `data:audio/mp3;base64,${audio}`;
      }
      
        setAudio(audioSrc);
        setLoading(false);
        setPlaying(true);
       }
  };


  
  const stopAudio = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setAudio(null);
    setCurrentTime(null);
    setPlaying(false);
    props.setCurrentA(null);
  };

  useEffect(() => {
    if (props.currentA !== props.key) {
      stopAudio();
    }
  }, [props.currentA]);

  useEffect(() => {
    if (props.isCurrent && !props.isDone) {
      playAudio();
      decrementTime(props?.time);
    } else {
      stopAudio();
    }
  }, [props.isCurrent, props.isDone]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="brand.100"
      height="auto" // Ensure it takes up the full viewport height
      w={"full"}
    >
      <Box
        bg={props?.isDone ? "brand.200" : "brand.100"}
        borderRadius="xl"
        width="95%"
        color={props?.isDone ? "brand.100" : "brand.500"}
        overflow="hidden"
        p="10"
        my={["4", "6", "7", "7"]}
        position="relative"
        border="1px"
        borderColor="gray.400"
        style={{
          boxShadow: "0px 0px 50px 0px #EDEDED", // Box shadow with blur
        }}
      >
        <Flex
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          gap={["4", "4", "2", "2"]}
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "75%", "75%"]} alignItems="flex-start">
            <Text
              // textAlign="flex-start"
              fontSize={{ base: 20, sm: 30, md: 24, lg: 24 }}
              fontWeight="700"
            >
              {props?.title}
            </Text>
          </Box>
          <Flex
            flexDirection="row"
            width={["100%", "100%", "25%", "25%"]}
            alignItems="center"
            justifyContent={["start", "start", "end", "end"]}
            gap="2"
          >
            <Text
              fontSize={{ base: 20, sm: 20, md: 24, lg: 24 }}
              fontWeight="700"
              fontFamily="fonts.heading"
              color="brand.200"
            >
              {currentTime || props?.time}
            </Text>
            {!playing && !loading && (
              <BsPlayCircleFill
                size={28}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  color: "#F07B3F",
                }}
                onClick={() => {
                  playAudio();
                  decrementTime(props?.time);
                }}
              />
            )}
            {playing && !loading && (
              <BsPauseCircleFill
                size={28}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  color: "#F07B3F",
                }}
                onClick={() => {
                  stopAudio();
                }}
              />
            )}
            {loading && <Spinner size="md" />}
            {audio && <audio autoPlay ref={audioRef} src={audio} />}
          </Flex>
        </Flex>

        {paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            mt={index === 0 ? "6" : "2"}
            fontSize={{ base: 14, sm: 16, md: 18, lg: 18 }}
          >
            {paragraph.trim() + (index < paragraphs.length - 1 ? "." : "")}
          </Text>
        ))}
        {/* <Image
                    src={props.src}
                    fallbackSrc='https://via.placeholder.com/150'
                    mt="6"
                    width="100%"
                    height="auto"
                /> */}
      </Box>
    </Flex>
  );
};

export default SequenceTile;
