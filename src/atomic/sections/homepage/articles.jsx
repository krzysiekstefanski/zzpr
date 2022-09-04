import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../partials/container"
import Article from "../../molecules/article"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import Grid from "../../../components/grid"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import Icon from "../../atoms/icon";
import HexesSVG from "../../../images/hexes.inline.svg"
import DotsSVG from "../../../images/dots.inline.svg"
import CrossSVG from "../../../images/cross.inline.svg"
import Heading from "../../atoms/heading";

const settings = {
    centerMode: false,
    infinite: false,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};


const Articles = styled.section`
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
        img {
            object-fit: contain !important;
        }
    }
`

const Anchor = styled.span`
    position: absolute;
    top: -182px;
`

const SlideWrapper = styled.div`
    height: 228px;
    padding-right: 24px;
`


const ArticlesSection = ({ className, data }) => (
    <Articles className={className} imageWidth={data.sponsorzyZdjecia.length}>
        <Anchor id="wydarzenia" />
        <Container>
            <Heading mb="24px">Ogłoszenia</Heading>
            <Slider {...settings}>
                <SlideWrapper>
                    <Article nowrap date="16.08.2022" title="KURSOKONFERENCJA TRENERSKA - LICENCJA C - 03-04.08.2022 R." text="Zachodniopomorski Związek Piłki Ręcznej w Szczecinie informuje , iż w dniach 03-04.09.2022r. jest organizatorem szkoleniowej kursokonferencji piłki ręcznej dla instruktorów i trenerów na licencję „C” na sezon 2022/2023." link="./news/kursokonferencja-trenerska-licencja-c-03-04082022-r" />
                </SlideWrapper>
                <SlideWrapper>
                    <Article date="aaa" title="aaa" text="aaa" link="aaa" />
                </SlideWrapper>
                <SlideWrapper>
                    <Article date="aaa" title="aaa" text="aaa" link="aaa" />
                </SlideWrapper>
                <SlideWrapper>
                    <Article date="aaa" title="aaa" text="aaa" link="aaa" />
                </SlideWrapper>
                <SlideWrapper>
                    <Article date="aaa" title="aaa" text="aaa" link="aaa" />
                </SlideWrapper>
                <SlideWrapper>
                    <Article date="aaa" title="aaa" text="aaa" link="aaa" />
                </SlideWrapper>
            </Slider>
            <Grid className="sponsors" columns={`repeat(${data.sponsorzyZdjecia.length}, minmax(25%, calc(50% - 12px)))`} gap="24px" justify="center" width="100%" m="172px 0 0">
                {data.sponsorzyZdjecia.map((zdjecie) => (
                    <a href={zdjecie.sponsorzyZdjeciaLink ? zdjecie.sponsorzyZdjeciaLink : null} target="_blank">
                        {console.log(data.sponsorzyZdjecia.length)}
                        <FlexBox className="content-left" hidden showMD height="409px" width="100%" relative >
                            <Img fixed={zdjecie.sponsorzyZdjeciaZdjecie.localFile.childImageSharp.fluid} />
                        </FlexBox>
                    </a>
                ))}
            </Grid>
        </Container>
        <StaticImage className="left-bg" src="../../../images/1.png" width="430px" />
    </Articles >
)

export default ArticlesSection