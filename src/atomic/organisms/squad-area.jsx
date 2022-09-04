import React from "react"
import styled from "styled-components"
import Card from "../molecules/card-team";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import { FlexBox } from "../../components/flexbox";
import { color } from "../../components/colors";
import SectionTitle from "../atoms/section-title";
import SquadCard from "../molecules/squad-card";
import SquadFile from "../molecules/squad-file";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: ${props => (props.mb ? props.mb : "")};
`



const DownloadArea = ({ data, mb }) => (
    data.map((kadra) => (
        <Wrapper mb={mb}>
            <>
                <SquadCard data={kadra} mb="24px" />
                {kadra.kadrapliki.map((pliki, i, arr) => (
                    i + 1 !== arr.length ?
                        <SquadFile data={pliki} mb="24px" /> :
                        <SquadFile data={pliki} />
                ))}
            </>
        </Wrapper>
    ))
)

export default DownloadArea
