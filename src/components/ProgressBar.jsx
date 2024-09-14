import { HStack } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  return (
    <HStack
      w={'100%'}
      h={'0.75rem'}
      rounded={'2xl'}
      border={'1.5px solid'}
      borderColor={'gray.300'}
      background={'gray.200'}
    >
      <HStack
        h={'100%'}
        background={'brand.1000'}
        rounded={'2xl'}
        w={`${progress}%`}
        transition={'width 50ms linear'}
      >
      </HStack>
    </HStack>
  )
}

ProgressBar.propTypes =
{
  progress: PropTypes.number || PropTypes.string
}

export default ProgressBar