import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "../../components/grid";

const Wrapper = styled(Grid)`
    .gatsby-image-wrapper {
        &::before {
            content: '';
            display: block;
            padding-top: 70%;
        }
    }
`

const GalleryPreviewImages = ({ data }) => (
    <Wrapper columns="1fr 1fr 1fr" gap="24px" width="100%">
        {data.slice(0, 6).map((zdjecie) => (
            <Link to={zdjecie.localFile.publicURL}>
                <Img fixed={zdjecie.localFile.childImageSharp.fluid} />
            </Link>
        ))}
        {/* <Link to="#">
            <StaticImage src="https://picsum.photos/400/300" alt="A kitten" />
        </Link>
        <Link to="#">
            <StaticImage src="https://picsum.photos/400/300" alt="A kitten" />
        </Link>
        <Link to="#">
            <StaticImage src="https://picsum.photos/400/300" alt="A kitten" />
        </Link>
        <Link to="#">
            <StaticImage src="https://picsum.photos/400/300" alt="A kitten" />
        </Link>
        <Link to="#">
            <StaticImage src="https://picsum.photos/400/300" alt="A kitten" />
        </Link> */}
    </Wrapper>
)

export default GalleryPreviewImages