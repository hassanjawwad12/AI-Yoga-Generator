import { Box, VStack } from '@chakra-ui/react';
import SequenceTile from '../components/SequenceTile';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import Feedback from '../components/Feedback';
import InputTile from '../components/InputTile';

const Sequence = () => {

    const [click,setClick] = useState(0);
    const[currentA,setCurrentA]=useState(0);
    const [currentAudio, setCurrentAudio] = useState(null);


    const id = localStorage.getItem('id');
    let json = {}
    let inputJson = {}
    try {
        json = JSON?.parse(localStorage.getItem('sequence')) || {};
        inputJson = JSON?.parse(localStorage.getItem('input')) || {};

        if (Object.keys(json).length === 0) {
            useToast({
                title: 'Error',
                description: 'Please go back and try again',
                status: 'error',
                duration: 9000,
                isClosable: true,
                onCloseComplete: () => {
                    localStorage.removeItem('sequence');
                    window.location.href = '/dashboard';
                }
            });
        }
        json["Opening Pose"]?.forEach(tile => tile.isDone = false);
        json["Warmup Poses"]?.forEach(tile => tile.isDone = false);
        json["Main Poses"]?.forEach(tile => tile.isDone = false);
        json["Cool Down and Closing Poses"]?.forEach(tile => tile.isDone = false);
    } catch (ex) {
        useToast({
            title: 'Error',
            description: 'Please go back and try again',
            status: 'error',
            duration: 9000,
            isClosable: true,
            onCloseComplete: () => {
                localStorage.removeItem('sequence');
                window.location.href = '/dashboard';
            }
        });
        throw ex;
    }
    const [input, setInput] = useState(Object.keys(inputJson).length !== 0 ? inputJson : null);

    const getData = () => {
        var newSongPoses = [];
        json["Opening Pose"]?.forEach(tile => newSongPoses.push(tile));
        json["Warmup Poses"]?.forEach(tile => newSongPoses.push(tile));
        json["Main Poses"]?.forEach(tile => newSongPoses.push(tile));
        json["Cool Down and Closing Poses"]?.forEach(tile => newSongPoses.push(tile));
        return newSongPoses;
    }
    const [poses, setPoses] = useState(getData()); // state for all poses
    const [currentPoseIdx, setCurrentPoseIdx] = useState(0); // state for current pose index

    if (poses.length > 0) {
        poses[0].isDone = true;
      }
    
    useEffect(() => {
        var newSongPoses = [...poses];
        newSongPoses.forEach((pose, idx) => {
            pose.isCurrent = idx === currentPoseIdx ? true : false;
        });
        setPoses(newSongPoses);
    }, [currentPoseIdx]);

    const handlePoseDone = () => {
        var newSongPoses = [...poses];
        newSongPoses[currentPoseIdx].isDone = true;
        setPoses(newSongPoses);
        setCurrentPoseIdx(oldIdx => oldIdx < newSongPoses.length - 1 ? oldIdx + 1 : oldIdx);
    };

    return (
        <VStack
            w={'full'}
            minHeight={'100vh'}
            background={'brand.100'}
            paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
            paddingY={10}
            color={'brand.500'}
        >
            <Header />
            <Box mt={'12'} />
            {input !== null && 
            <InputTile feeling={input?.feeling} condition={input?.health} time={input?.time} expertise={input?.expertise} />}
            {poses?.map((tile, index) => (
                <SequenceTile
                    key={index} // Provide a unique key for each SequenceTile
                    type={tile?.type}
                    title={tile?.Pose}
                    time={tile?.Duration}
                    text={tile?.Instruction}
                    src={tile?.src}
                    isDone={tile?.isDone}
                    isCurrent={tile?.isCurrent}
                    onDone={handlePoseDone}
                    currentA={currentAudio}
                    setCurrentA={setCurrentAudio}
                    
                />
            ))}
            <Feedback sequenceId={id}/>
        </VStack>
    );
};

export default Sequence;

