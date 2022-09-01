import React from "react"
import styled from "styled-components"
import Card from "../molecules/card-team";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import { FlexBox } from "../../components/flexbox";
import { color } from "../../components/colors";
import SectionTitle from "../atoms/section-title";
import FileSave from "../molecules/file-save";

const Wrapper = styled.div`
  width: 100%;
`

const DownloadArea = ({ data }) => (
    <Wrapper>
        <Heading mb="24px">Pliki do pobrania</Heading>
        {data.pliki.map((plik, i, arr) => (
            i + 1 !== arr.length ? <FileSave data={plik} mb="24px" /> : <FileSave data={plik} />
        ))}
    </Wrapper>
)

export default DownloadArea
