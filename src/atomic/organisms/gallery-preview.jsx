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
import GalleryHeadingLink from "../molecules/gallery-heading-link";
import GalleryPreviewImages from "../molecules/gallery-preview-images";

// const Wrapper = styled.div`
//   width: 100%;
//   margin-bottom: ${props => (props.mb ? props.mb : "")};
// `



const GalleryPreview = ({ data }) => (
    <FlexBox column mb="64px">
        <GalleryHeadingLink data={data.nazwaGalerii} />
        <GalleryPreviewImages data={data.zdjecia} />
    </FlexBox>
)

export default GalleryPreview
