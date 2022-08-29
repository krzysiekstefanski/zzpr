import React from "react"
import styled from "styled-components"
import Input from "../atoms/input"
import TextArea from "../atoms/textarea"

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  & > span {
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`

const FormField = ({ label, textArea }) => (
  <Wrapper>
    <span>{label}</span>
    {textArea ? <TextArea /> : <Input />}
  </Wrapper>
)

export default FormField
