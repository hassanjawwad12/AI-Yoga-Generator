import { Button ,Icon} from '@chakra-ui/react';

function CustomButton(props) {

  const buttonStyles = {
    primary: {
      transition:'all .2s ease-in-out',
      color: 'brand.100',
      bg: 'brand.200',
      borderRadius: 'full',
      fontWeight: 400,
      fontSize:14,
      letterSpacing: '0em',
      fontFamily: 'fonts.text',
      ...props,
      _hover:{
        bg: 'brand.1000',
    }},
    secondary:{
      transition:'all .2s ease-in-out',
      color: 'brand.200',
      bg: 'brand.600',
      borderRadius: '27px',
      fontSize: 'fontSizes.14',
      fontWeight: 400,
      lineHeight: '19px',
      fontFamily: 'fonts.heading',
      ...props,
      _hover:{
        bg: 'brand.200',
        color:'brand.600',
    }
    },
    tertiary:{
      transition:'all .2s ease-in-out',
      color: 'brand.400',
      bg: 'brand.700',
      borderRadius: '14px',
      fontSize: 'fontSizes.14',
      fontWeight: 'fontWeights.600',
      width:{ base: "300px", sm: "400px", md: "550px", lg:'638px' },
      height:{ base: "46px", sm: "48px", md: "50px", lg:'60px' },
      lineHeight: '19px',
      letterSpacing: '0em',
      fontFamily: 'fonts.text',
      // borderColor: 'brand.200',
      boxShadow: '0 0 0 0.3px #51565E',
      ...props,
      _hover:{
        bg: 'brand.200',
        color:'brand.600',
    }
    },
    
    default: {
    },
  };

  const selectedStyles = buttonStyles[props.type] || buttonStyles.default;
  return (
    <Button {...selectedStyles} >
      {props.icon && <Icon as={props.icon} width={props.iconw} height={props.iconh} mr={2} />}
      {props.btnname}
    </Button>
  );
}

export default CustomButton;
