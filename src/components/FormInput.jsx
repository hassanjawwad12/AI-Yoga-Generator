import { VStack, FormLabel, Textarea, RadioGroup, Radio, Button, HStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const FormInput = ({ type, label, dispatch, name, value, placeholder, radioOptions, buttonOptions }) => {
    return (
        <VStack
            w={'100%'}
        >
            <FormLabel
                w={'100%'}
                paddingLeft={2}
            >
                {label}
            </FormLabel>
            {
                type === 'text' ?
                    <VStack
                        w={'100%'}
                        background={'brand.input'}
                        rounded={'xl'}
                        border={'1px solid transparent'}
                        _focusWithin={{
                            borderColor: 'brand.secondary'
                        }}
                        _hover={{
                            borderColor: 'brand.secondary'
                        }}
                        paddingBottom={3}
                    >
                        <Textarea
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            paddingY={3}
                            fontSize={'sm'}
                            borderColor={'transparent'}
                            focusBorderColor={'transparent'}
                            resize={'none'}
                            height={'10rem'}
                            rounded={'xl'}
                            color={'brand.body'}
                            onChange={({ currentTarget }) => dispatch({ type: name, payload: currentTarget.value })}
                            _hover={{
                                borderColor: 'transparent'
                            }}
                        />
                        <HStack
                            w={'100%'}
                            paddingX={[2, 2, 5, 5]}
                            display={'grid'}
                            gridTemplateColumns={'auto auto auto'}
                        >
                            {
                                buttonOptions.map(btnName =>
                                    <Button
                                        key={btnName + name + label}
                                        fontSize={'sm'}
                                        backgroundColor={'transparent'}
                                        border={'2px solid'}
                                        borderColor={'brand.secondary'}
                                        color={'brand.secondary'}
                                        rounded={'full'}
                                        _hover={{
                                            background: 'brand.secondary',
                                            color: 'brand.input'
                                        }}
                                        onClick={() => dispatch({ type: name, payload: btnName })}
                                    >
                                        {btnName}
                                    </Button>
                                )
                            }
                        </HStack>
                    </VStack>
                    :
                    <RadioGroup
                        value={value}
                        background={'brand.input'}
                        rounded={'2xl'}
                        width={'100%'}
                        padding={'2rem'}
                    >
                        <VStack spacing={4} direction='row'>
                            {
                                radioOptions?.map(option =>
                                (
                                    <Radio
                                        onClick={() => dispatch({ type: name, payload: option })}
                                        w={'100%'}
                                        key={option}
                                        value={option}
                                        borderColor={'brand.secondary'}
                                        className='radio'
                                        outlineColor='brand.secondary'
                                        _checked={{
                                            appearance: 'none',
                                            accentColor: 'brand.secondary',
                                            border: '4px solid',
                                            borderColor: 'brand.input',
                                            background: 'brand.secondary',
                                            outline: '2px solid',
                                            outlineColor: 'brand.secondary'
                                        }}
                                    >
                                        {option}
                                    </Radio>
                                ))
                            }
                        </VStack>
                    </RadioGroup>

            }
        </VStack>
    )
}

FormInput.propTypes =
{
    type: PropTypes.string,
    label: PropTypes.string,
    dispatch: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    radioOptions: PropTypes.array,
    buttonOptions: PropTypes.array
}

export default FormInput