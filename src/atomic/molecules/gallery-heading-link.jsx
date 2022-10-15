import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Heading from "../atoms/heading"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { link } from "../../components/general-config"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import ArrowRightIcon from "../../images/arrow-right-red.inline.svg"
import Link from "../atoms/innerLink"

const Wrapper = styled(FlexBox)`

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
    }
`

const GalleryHeadingLink = ({ data, icon, dataId, nowrap, date, title, text, url }) => (
    <Wrapper justify="space-between" align="center" width="100%" mb="24px">
        {console.log(data.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-'))}
        <Heading size="h600" color={color.white}>{data}</Heading>
        <Link to={data.toLowerCase().normalize("NFD").replace("ł", "l").replace("ó", "o").replace(/\s+/g, '-')} typography="button">
            Zobacz więcej
            <ArrowRightIcon />
        </Link>
    </Wrapper >
)

export default GalleryHeadingLink
