import React from "react"
import styled from "styled-components"
import Card from "../molecules/card-team";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import { FlexBox } from "../../components/flexbox";
import { color } from "../../components/colors";
import SectionTitle from "../atoms/section-title";

const Wrapper = styled.div`
  width: 100%;
`

const TeamBoxes = ({ data }) => (
    <Wrapper>
        {data.kadraKategoria.map(kategoria => (
            <FlexBox direction="column" width="100%" m="0 auto 32px">
                <SectionTitle size="3" width="100%" pb="8px" mb="64px" underline lineHeight="1px">{kategoria.kadraKategoriaNazwa}</SectionTitle>
                <FlexBox align="stretch" wrap width="100%">
                    {kategoria.kadraKategoriaOsoba.map((osoba) => (
                        <Card data={osoba} icon={<DoctorSVG />} />
                    ))}
                </FlexBox>
            </FlexBox>
        ))}
    </Wrapper>
)

export default TeamBoxes
