import React, { useState } from "react"
import styled from "styled-components";
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import SectionTitle from "../../atoms/section-title";
import TeamBoxes from "../../organisms/team-boxes";
import Icon from "../../atoms/icon"
import CircleSVG from "../../../images/circle-2.inline.svg"
import HexesSVG from "../../../images/hexes-3.inline.svg"
import Hexes2SVG from "../../../images/hexes-4.inline.svg"

const HomepageTeamSection = ({ data }) => {
  const [teamIsActive, setTeamIsActive] = useState(false)

  const handleClick = e => {
    e.target.previousSibling.classList.toggle("active")
    e.target.classList.toggle("active")
    setTeamIsActive(!teamIsActive)
  }

  return (
    <Team id="nasza-kadra">
      <Icon icon={<CircleSVG />} height="634px" width="318px" absolute top="60%" topMD="130px" left="0"/>
      <Icon icon={<HexesSVG />} height="382px" width="268px" absolute top="20%" topMD="-337px" right="0" index="-1"/>
      <Icon icon={<Hexes2SVG />} height="382px" width="188px" absolute top="87%" topMD="537px" left="0"/>
      <Container>
        <SectionTitle title="Personel medyczny" mb="50" upperline lineWidth="48px" />
        <TeamBoxes data={data} />
      </Container>
    </Team>
  )
}

export default HomepageTeamSection

const Team = styled.section`
  width: 100%;
  position: relative;
  padding: 48px 0 24px;

  @media (min-width: 769px) {
    padding: 80px 0 32px;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${color.neutral90};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    @media (min-width: 769px) {
      height: 112.3%;
    }
  }

  button {
    font-family: Albert Sans, sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
    color: ${color.white};
    text-transform: uppercase;
    background-color: transparent;
    border: transparent;
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    cursor: pointer;

    span {
      display: block;
      padding-top: 5px;
      pointer-events: none;
    }

    &.active {
      span {
        transform: scale(-1);
      }
    }
  }
`