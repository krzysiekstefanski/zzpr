import React from "react"
import styled from "styled-components"
import Heading from "../atoms/heading"
import { color } from "../../components/colors"
import Box from "../atoms/Box/Box"
import ArrowRightIcon from "../../images/arrow-right-red.inline.svg"
import Link from "../atoms/innerLink"

const Wrapper = styled(Box)`

    a {
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;

        svg {
            margin-left: 4px;
            transition: transform 0.3s ease;
        }

        &:hover {
            svg {
                transform: translateX(3px);
            }
        }

        @media (max-width: 768px) {
            margin-top: 24px;
        }
    }
`

const GalleryHeadingLink = ({ data, icon, dataId, nowrap, date, title, text, url }) => (
    <Wrapper column directionMD="row" justify="space-between" alignMD="center" width="100%" margin="0 0 24px">
        <Heading size="h600" color={color.white}>{data}</Heading>
        <Link to={data.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-')} typography="button">
            Zobacz więcej
            <ArrowRightIcon />
        </Link>
    </Wrapper >
)

export default GalleryHeadingLink
