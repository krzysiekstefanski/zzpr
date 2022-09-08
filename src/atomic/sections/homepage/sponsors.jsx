import * as React from "react"
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../partials/container"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import Grid from "../../../components/grid"

const Sponsors = styled.section`
    position: relative;

    .slick-list {
        overflow: visible;
    }

    .slick-dots {
        bottom: -65px;

        li {
            margin: 0;

            button::before {
                color: ${color.neutral20};
                font-size: 12px;
                opacity: 1;
            }

            &.slick-active {
                button::before {
                    color: ${color.red40};
                    opacity: 1;
                }
            }
        }
    }

    .left-bg {
        display: none;
        position: absolute;
        left: 0;
        bottom: -210px;
        z-index: -1;
        mix-blend-mode: lighten;

        &::before {
            content: '';
            display: block;
            padding-top: 256.8%;
        }
    }

    .sponsors {
        display: none;

        img {
            object-fit: contain !important;
        }
    }

    @media (min-width: 769px) {
        .left-bg {
            display: block;
        }

        .sponsors {
            display: grid;
        }
    }
`

const Anchor = styled.span`
    position: absolute;
    top: -182px;
`


const SponsorsSection = ({ className, data }) => (
    <Sponsors className={className} imageWidth={data.sponsorzyZdjecia.length}>
        <Anchor id="sponsorzy" />
        <Container>
            <Grid className="sponsors" columns={`repeat(${data.sponsorzyZdjecia.length}, minmax(25%, calc(50% - 12px)))`} gap="24px" justify="center" width="100%" m="172px 0 0">
                {data.sponsorzyZdjecia.map((zdjecie) => (
                    <a href={zdjecie.sponsorzyZdjeciaLink ? zdjecie.sponsorzyZdjeciaLink : null} target="_blank">
                        <FlexBox className="content-left" hidden showMD height="409px" width="100%" relative >
                            <Img fixed={zdjecie.sponsorzyZdjeciaZdjecie.localFile.childImageSharp.fluid} />
                        </FlexBox>
                    </a>
                ))}
            </Grid>
        </Container>
        <StaticImage className="left-bg" src="../../../images/1.png" width="430px" />
    </Sponsors >
)

export default SponsorsSection