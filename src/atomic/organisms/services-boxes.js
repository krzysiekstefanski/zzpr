import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Card from "../molecules/card";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import Box from "../atoms/Box/Box";
import { color } from "../../components/colors";

const Wrapper = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    transition: transform .3s ease;

    &:hover {
        transform: scale(1.05)
    }
  }
`

const ServicesBoxes = ({ data }) => (
    <Wrapper>
        <Box display="grid" columns="1fr 1fr" columnsSM="1fr 1fr 1fr" columnsLG="1fr 1fr 1fr 1fr 1fr 1fr" gap="24px" width="100%" margin="48px auto" marginMD="48px auto 85px">
            {data.uslugiUsluga.map((usluga, i) => (
                <Link to={`/${usluga.uslugiLink}`}>
                <Card data={usluga} dataId={i} />
                </Link>
            ))}
        </Box>
    </Wrapper>
)

export default ServicesBoxes
