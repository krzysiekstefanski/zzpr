import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import { Link } from "gatsby"
import Heading from "../atoms/heading"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { link } from "../../components/general-config"
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

    a {
        ${link.typography}
        color: ${color.white};
        margin-top: auto;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: ${color.red40};
        }
    }
`

const Article = ({ data, icon, dataId, nowrap, date, title, text, url }) => (
    <Wrapper column data-id={dataId} nowrap={nowrap}>
        <Text typography={typography.bodyS} mb="10px">{date}</Text>
        {/* <FlexBox column maxHeight=""> */}
        <Heading className="article-title" color={color.white} mb="10px">{title}</Heading>
        <Text className="article-content" typography={typography.bodyM} mb="26px">{text}</Text>
        {/* </FlexBox> */}
        <Link to={`/${url}`} className="article-">Czytaj dalej</Link>
    </Wrapper>
)

export default Article
