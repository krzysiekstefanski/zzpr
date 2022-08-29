import React from "react"
import styled from "styled-components"
import { color } from "../../components/colors"
import VisibilitySensor from "../../components/VisibilitySensor"

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`

const Checkmark = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${color.green402};
  // background-color: ${color.green402};
  border-radius: 5px;
  z-index: 0;
  transform: scale(1);
  vertical-align: middle;
  //background-color: transparent;
  transition: all 0.2s ease;
  margin-right: 15px;
  cursor: pointer;

  @media (min-width: 992px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }

  svg {
    height: 24px;
    width: 24px;
    position: absolute;
    top: 3px;
    left: 3px;
    fill: none;
    stroke: ${color.blue40};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
    z-index: 99;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
  }

  .active {
    background-color: transparent;
    animation: wave 0.4s ease;

    &::before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }
`

const Label = styled.label`
  display: flex;
  align-items: center !important;
  padding-left: 45px !important;
  margin-bottom: 16px !important;
  position: relative;

  .checkbox:checked ~ .checkmark {
    background-color: transparent;
    animation: wave 0.4s ease;

    svg {
      stroke-dashoffset: 0;
    }

    &::before {
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }

  p {
    font-size 12px;
    line-height: 20px;
  }
`

const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;

  &:hover {
    & + .checkmark {
      border-color: ${color.blue40};
    }
  }
`

class FormAcceptance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: [{ id: 0, name: "checkbox", active: false }],
    }
  }

  handleClick = e => {
    e.target.closest("input").classList.toggle("active")
  }

  render() {
    return (
      <Wrapper>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <Label className={isVisible ? "slideUp enter" : "slideUp"}>
              <Checkbox className={"checkbox"} type={"checkbox"} />
              <Checkmark className={"checkmark"}>
                <svg width="16px" height="16px" viewBox="-1 0 16 12">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </Checkmark>
              <p>
                Zgadzam się na kontakt w celu uzyskania odpowiedzi na wiadomość
                zawartą w formularzu kontaktowym.
                <br/>
                Państwa dane przetwarzane będą wyłącznie w celu udzielenia
                odpowiedzi na zapytanie zgodnie z zasadą, która głosi, że
                przetwarzanie danych jest zgodne z prawem jeżeli jest niezbędne w
                celu realizacji umowy lub przed jej zawarciem.
              </p>
            </Label>
          )}
        </VisibilitySensor>
      </Wrapper>
    )
  }
}

export default FormAcceptance
