import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Link from "../atoms/link"
import Heading from "../atoms/heading"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"

const Wrapper = styled(FlexBox)`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: ${color.neutral20};
    padding: 16px;
    border-radius: 4px;

    .article-title {
        max-width: 100%;
        text-overflow: ellipsis;
        display: ${props => (props.nowrap ? "" : " -webkit-box")};
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: ${props => (props.nowrap ? "nowrap" : "")};
        overflow: hidden;
    }

    .article-content {
        max-height: 72px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`

const Article = ({ data, icon, dataId, nowrap, date, title, text, link }) => (
    <Wrapper column data-id={dataId} nowrap={nowrap}>
        <Text typography={typography.bodyS} mb="10px">{date}</Text>
        {/* <FlexBox column maxHeight=""> */}
        <Heading className="article-title" color={color.white} mb="10px">{title}</Heading>
        <Text className="article-content" typography={typography.bodyM} mb="26px">{text}</Text>
        {/* </FlexBox> */}
        <Link href={link} mt="auto">Czytaj dalej</Link>
    </Wrapper>
)

export default Article
