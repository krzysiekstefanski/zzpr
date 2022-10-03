import * as React from "react"
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../partials/container"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import Grid from "../../../components/grid"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import Calendar from "../../../images/calendar.inline.svg"
import Heading from "../../atoms/heading";

const Schedule = styled.section`
    padding: 48px 0 0;
    position: relative;

    @media (min-width: 769px) {
    padding: 80px 0;
    }

    .content-left,
    .content-right {
        &__title {
            &::after {
                content: "";
                height: 1px;
                width: 100%;
            }
        }
    }
    .content-left {
        &__title {
            &::after {
                background-color: ${color.red40};
            }
        }
    }

    .content-right {
        &__title {
            &::after {
                background-color: ${color.neutral80};
            }
        }
    }

    .content-right {
        span {
            font-size: 16px;
            line-height: 24px;
            color: ${color.white};
            border: 1px solid ${color.green00};
            border-radius: 32px;
            white-space: nowrap;
            padding: 1px 15px;
        }
    }
`

const ScheduleSection = ({ className, data }) => (
    <Schedule id="terminarz" className={className}>
        {data ?
            <Container>
                <SectionTitle title="Terminarz" />
                <Grid columns="1fr 1fr" gap="24px" width="100%" m="48px 0 0">
                    <FlexBox className="content-left" column width="100%">
                        <FlexBox className="content-left__title" column width="100%" mb="28px">
                            <Heading size="4" mb="8px">Najbliższe mecze</Heading>
                        </FlexBox>
                        <FlexBox column width="100%" p="0 8px">
                            {data.najblizszeMecze?.map((mecze) => (
                                <>
                                    <FlexBox align="center" width="100%" p="12px 16px" mb="16px"><Calendar /><Text>{mecze.najblizszeMeczeData ? mecze.najblizszeMeczeData : null}</Text></FlexBox>
                                    <FlexBox column width="100%">
                                        {mecze.najblizszeMeczeLista?.map((lista) => (
                                            <FlexBox align="center" width="100%" backgroundColor={color.neutral20} p="12px 16px" mb="16px"><Text>{lista.najblizszeMeczeListaMecz ? lista.najblizszeMeczeListaMecz : null}</Text></FlexBox>
                                        ))}
                                    </FlexBox>
                                </>
                            ))}
                        </FlexBox>
                    </FlexBox>
                    <FlexBox className="content-right" column width="100%">
                        <FlexBox className="content-right__title" column width="100%" mb="28px">
                            <Heading size="4" mb="8px">Ostatnie mecze</Heading>
                        </FlexBox>
                        <FlexBox column width="100%" p="0 8px">
                            {data.ostatnieMecze?.map((mecze) => (
                                <>
                                    <FlexBox align="center" width="100%" p="12px 16px" mb="16px"><Calendar /><Text>{mecze.ostatnieMeczeData ? mecze.ostatnieMeczeData : null}</Text></FlexBox>
                                    <FlexBox column width="100%">
                                        {mecze.ostatnieMeczeLista?.map((lista) => (
                                            <FlexBox justify="space-between" align="center" width="100%" backgroundColor={color.neutral20} p="12px 16px" mb="16px"><Text pr="32px">{lista.ostatnieMeczeListaMecz ? lista.ostatnieMeczeListaMecz : null}</Text><span>{lista.ostatnieMeczeListaWynik ? lista.ostatnieMeczeListaWynik : null}</span></FlexBox>
                                        ))}
                                    </FlexBox>
                                </>
                            ))}
                        </FlexBox>
                    </FlexBox>
                </Grid>
            </Container>
            : null}
    </Schedule>
)

export default ScheduleSection