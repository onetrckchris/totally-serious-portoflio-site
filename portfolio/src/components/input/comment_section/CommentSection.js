import React from 'react';
import styled from 'styled-components';
import { Form, withFormik, Field } from 'formik';
import * as Yup from 'yup';

const CommentSection = () => {
    return (
        <StyledForm>
            <UsernameField type="text" name="username" placeholder="Who are you?" />
            <CommentTextArea component="textarea" type="text" name="comment" placeholder="Leave a comment!" />
            <Submit type="submit">Submit</Submit>
        </StyledForm>
    );
};

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

const UsernameField = styled(Field)`
    width: 150px;
    margin-top: 20px;
    outline: none;
    padding: 5px;
`;

const CommentTextArea = styled(Field)`
    height: 200px;
    width: 100%;
    margin-top: 20px;
    outline: none;
    font-size: 1.2rem;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
`;

const Submit = styled.button`
    border: 1px solid black;
    width: 80px;
    margin-top: 10px;
    font-weight: 600;
    align-self: flex-end;
    cursor: pointer;
    padding: 5px;
`;

export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            comment: ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string(),
        comment: Yup.string()
    }),
    handleSubmit(values, formikBag) {
        formikBag.resetForm();
        const comment = { username: values.username, comment: formikBag.props.generateComment() };

        formikBag.props.postComment(comment);
    }
})(CommentSection);