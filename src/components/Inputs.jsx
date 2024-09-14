import { Textarea, Box ,Input} from '@chakra-ui/react';

function CustomInput(props) {
  const inputStyles = {
    primary: {
      transition: 'all .2s ease-in-out',
      color: 'brand.1200',
      bg: 'brand.700',
      borderRadius: '14px',
      focusBorderColor: 'brand.100',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '17px',
      letterSpacing: '0em',
      fontFamily: 'fonts.text',
      overflowY: 'auto', // Enable y-axis scrollbar when content exceeds the text height
      padding: '20px', // Adjust padding as needed
      resize: 'vertical', // Allow resizing of the textarea vertically
      ...props,
    },
    secondary: {
      transition: 'all .2s ease-in-out',
      color: 'brand.1200',
      width:{ base: "300px", sm: "400px", md: "550px", lg:'638px' },
      height:{ base: "46px", sm: "48px", md: "50px", lg:'60px' },
      bg: 'brand.700',
      borderRadius: '14px',
      fontSize: 14,
      fontWeight: 'fontWeights.600',
      lineHeight: '19px',
      letterSpacing: '0em',
      fontFamily: 'fonts.text',
      overflowY: 'auto', // Enable y-axis scrollbar when content exceeds the text height
      padding: '20px', // Adjust padding as needed
      resize: 'vertical', // Allow resizing of the textarea vertically
      ...props,
      focusBorderColor: "brand.200",
    },
    default: {},
  };

  const selectedStyles = inputStyles[props.type] || inputStyles.default;
  return (
    props.type === 'primary' ?
      <Textarea {...selectedStyles}
        placeholder={props.placeholder}
        value={props.text}
      />
      :
      <Input {...selectedStyles} type={props.case}  placeholder={props.placeholder} value={props.text}/>
  );
}

export default CustomInput;
