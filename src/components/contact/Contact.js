import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import StyledBtn from '../layout/button/StyledButton';
import Form from 'react-bootstrap/Form';
import Error from './error/Error';
import Heading from '../layout/heading/Heading';
import { yupResolver } from '@hookform/resolvers';
import styled from 'styled-components';

//Syled components 
const StyledForm = styled(Form)`
    margin-bottom: 30px;
`

const FormSentTxt = styled.p`
    color: ${({theme}) => theme.colors.blue};
    font-weight: bold;
    text-align: center;
`

const schema = yup.object().shape( {
    firstName: yup
        .string()
        .min( 2, 'First name has to be longer than 2 characters.' )
        .required( "First name is required" ),
    lastName: yup
        .string()
        .min( 2, 'Last name has to be longer than 2 characters.' )
        .required( "Last name is required" ),
    email: yup
        .string()
        .email( "Please enter a valid email address." )
        .required( "A valid email address is required." ),
    message: yup
        .string()
        .min( 10, 'Message has to be longer than 10 characters.' )
        .required( 'Message is required.' ),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        setFormSent( true );
        console.log( 'Form was submitted. Thank you! ' + JSON.stringify( data ) );
    }

    return (
        <>
            <Heading title="Contact form" />
            <StyledForm onSubmit={handleSubmit( onSubmit )} >
                {formSent && <FormSentTxt>Form was submitted. Thank you! We will respond to you shortly.</FormSentTxt>}                
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="First name" ref={register()} />
                    {errors.firstName && <Error>{errors.firstName.message}</Error>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Last name" ref={register()} />
                    {errors.lastName && <Error>{errors.lastName.message}</Error>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" ref={register()} />
                    {errors.email && <Error>{errors.email.message}</Error>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" as="textarea" rows="3" name="message" placeholder="Your message here" ref={register()} />
                    {errors.message && <Error>{errors.message.message}</Error>}
                </Form.Group>

                <StyledBtn type="submit">Submit</StyledBtn>

            </StyledForm>
        </>
    )
}

export default Contact;
