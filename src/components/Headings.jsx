import { Heading } from '@chakra-ui/react';

function CustomHeading(props) {
  const headingStyles = {
    primary: {
      color: 'brand.400',
      fontWeight: 700,
      fontFamily: 'fonts.heading',
      ...props,
    },
    secondary: {
        color: 'brand.400',
        fontWeight: 400,
        letterSpacing: '0em',
        fontFamily: 'fonts.text',
        ...props,
      },
    default: {},
  };

  const selectedStyles = headingStyles[props.type] || headingStyles.default;

  return (
    <Heading {...selectedStyles} >
      {props.text}
    </Heading>
  );
}

export default CustomHeading;
