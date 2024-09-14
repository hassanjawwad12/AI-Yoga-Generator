import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react'


const OrangeButton = ({ weight, type, width, loading, btnName, handleClick = () => { } }) => {
  return (
    <Button
      marginTop={{ base: 5, lg: 0 }}
      background={'brand.200'}
      fontWeight={weight || 'normal'}
      color={'brand.300'}
      borderRadius={'full'}
      padding={5}
      size={'sm'}
      fontSize={weight === 'semibold' ? 'normal' : 'small'}
      w={width || '100%'}
      _hover={{
        background: 'brand.1000',
      }}
      onClick={handleClick}
      type={type}
      isLoading={loading}
    >
      {btnName}
    </Button>
  )
}

OrangeButton.propTypes =
{
  weight: PropTypes.string,
  btnName: PropTypes.string,
  width: PropTypes.string || PropTypes.number,
  handleClick: PropTypes.func,
  type: PropTypes.string,
}

export default OrangeButton
