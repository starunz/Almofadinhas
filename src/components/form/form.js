import React, { useState, useCallback, useRef} from 'react';

import { Container } from './style';
import { 
    Box, 
    Button, 
    Form, 
    FormField, 
    Grommet, 
    TextArea, 
    TextInput 
} from 'grommet';

const allSuggestions = Array(20)
.fill()
.map((_, i) => `R$ ${i + 1}`);

export const FormDonation = () => {
    const [valid, setValid] = useState(false);

    const [stateValue, setStateValue] = useState({
        value: '',
        suggestions: allSuggestions,
    });

    const textInput = useRef(null)

    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        
        const escapedText = value;
        const exp = RegExp(escapedText);
        const suggestions = allSuggestions.filter((s) => exp.test(s));

        setStateValue({ suggestions });
    };

    const handleKeyUp = useCallback( (event) => {
        let newValue = event.currentTarget.value;

        newValue = newValue.replace('R$', 'R$');
        newValue = newValue.replace(/\D/g, '');
        newValue = newValue.replace(/(\d)(\d{2})$/, '$1,$2');
        newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, '.');
        newValue = newValue.replace('', 'R$');

        event.currentTarget.value = newValue;
        return event;
    }, [])

    
    const handleSubmit = (value) => {
        Object.assign(value, {
            amount: textInput.current.value,
            id: 1
        })
        console.log(value)
    }

    const onSelect = (event) => setStateValue({ ...stateValue, value: event.R$ });

    return (
        <Grommet theme={theme}>
            <Container fill align="center" justify="center">
                <Box width="medium">
                    <Form 
                        validate="change"
                        onReset={() => {}}
                        onSubmit={({ value }) => handleSubmit(value)}
                        onValidate={(validationResults) => {
                            setValid(validationResults.valid);
                        }}
                    >
                        <FormField style={{border:'#FF69B4'}}
                            label="Chave Pix"
                            name="keyPix"
                            value={'04704865207'}
                            required
                            validate={[
                            { regexp: /^[0-9]*$/ },
                            (number) => {
                              if (number && number.length > 11) 
                              return 'Apenas 11 números';
                              return undefined;
                            }, 
                            ]}
                        />

                        <FormField
                            label="Nome do beneficiário"
                            name="nameOng"
                            value={'Patinha Carente'}
                            required
                            validate={[
                            { regexp: /^[a-z]/i },
                            (lastName) => {
                                if (lastName && lastName.length === 1)
                                return 'Nome de usuário deve conter mais de 1 caracter';
                                return undefined;
                            },
                            ]}
                        />
                        <FormField 
                            label="Valor para transferência"
                            name="select-value"
                            htmlFor="text-input"
                            validate={()=> {}}
                        >
                            <TextInput 
                                id="text-input"
                                ref={textInput}
                                value={stateValue.value}
                                onChange={onChange}
                                onSelect={onSelect}
                                onKeyUp={handleKeyUp}
                                suggestions={stateValue.suggestions}
                                required
                                validate={() => {
                                    if (textInput.current.value === '') {
                                        return { 
                                            message: 'Preencha com o valor desejado', 
                                            status: 'info' 
                                        };
                                    }
                                    return;
                                }}
                            />
                        </FormField>
                        <FormField label="Descrição" name="Description" component={TextArea} />
                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button label="Cancel" />
                            <Button type="reset" label="Reset" />
                            <Button type="submit" label="Update" disabled={!valid} primary/>
                        </Box>
                    </Form>
                </Box>
            </Container>
        </Grommet>
    );
};


const theme = {
    global: {
        colors: {
            brand: '#FF69B4',
            border: '#FF69B4',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    }
};