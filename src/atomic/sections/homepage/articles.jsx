import * as React from "react"
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../partials/container"
import Article from "../../molecules/article"
import { color } from "../../../components/colors"
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
    <Articles className={className}>
        <Anchor id="wydarzenia" />
        <Container>
            <Heading mb="24px">Ogłoszenia</Heading>
            <Slider {...settings}>
                {data.reverse().map((post) => (
                    <SlideWrapper>
                        <Article nowrap date={post.node.date} title={post.node.title} text={post.node.excerpt} url={post.node.slug} />
                    </SlideWrapper>
                ))}
            </Slider>
        </Container>
    </Articles >
)

export default ArticlesSection