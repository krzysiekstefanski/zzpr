import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Card from "../molecules/card";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import Grid from "../../components/grid";
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
        <Grid columns="1fr 1fr 1fr 1fr 1fr 1fr" gap="24px" width="100%" m="48px auto 85px">
            {data.uslugiUsluga.map((usluga, i) => (
                <Link to={`/${usluga.uslugiLink}`}>
                <Card data={usluga} icon={<DoctorSVG />} dataId={i} />
                </Link>
            ))}
        </Grid>
    </Wrapper>
)

export default ServicesBoxes
