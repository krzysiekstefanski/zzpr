import React from "react"
import styled from "styled-components"
import Card from "../molecules/card-text-center";
import DoctorSVG from "../../images/doctor.inline.svg"
import Heading from "../atoms/heading";
import Text from "../atoms/text";
import { FlexBox } from "../../components/flexbox";
import { color } from "../../components/colors";

const ExperianceCard = ({ data, mb }) => (
    <FlexBox widthSM="45%" widthMD="100%" column directionXL="row" alignXL="center" mb={mb}>
        {data.dlaczegomydoswiadczeniebox 
            ? <Card text={data.dlaczegomydoswiadczeniebox} width="160" maxWidth="160" p="26px 8px" mb="20px" mbXL="0"/>
            : null}
        <FlexBox column plXL="41">
        {data.dlaczegomydoswiadczenienazwa 
            ? <Heading text={data.dlaczegomydoswiadczenienazwa} size="26" interline="31" mb="6"/>
            : null}
        {data.dlaczegomydoswiadczenieopis 
            ? <Text text={data.dlaczegomydoswiadczenieopis} size="16" interline="24" />
            : null}
        </FlexBox>
    </FlexBox>
)

export default ExperianceCard
