import React from "react"
import styled from "styled-components"
import Container from "../../partials/container"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import ContentCenter from "../../partials/content-center"
import Icon from "../../atoms/icon"
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox";
import DownloadSVG from "../../../images/dowload.inline.svg"

const Files = styled.section`
background-color: ${color.green40};
padding: 48px 0;

@media (min-width: 769px) {
  padding: 104px 0;
}
`

const Content = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content-left,
  .content-right {
    display: flex;
    flex-direction: column;
  }

  .content-left {
    width: 100%;
    margin-bottom: 16px;

    @media (min-width: 576px) {
      padding-bottom: 24px;
    }
    
    @media (min-width: 769px) {
      //padding-right: 96px;
      margin-bottom: 32px;
    }

    &--relative {
      @media (min-width: 769px) {
        position: relative;
        top: -66px;
      }
    }
    
    // @media (min-width: 769px) {
    //   width: 42.4%;
    //   margin-bottom: 0;
    // }
  }
  
  .content-right {
    width: 100%;
    
    // @media (min-width: 769px) {
    //   width: 57.6%;
    // }

    a {
      text-decoration: none;

      &:not(:last-child) {
        border-bottom: 1px solid ${color.white};
      }
    }
  }
`

const FilesSection = ({ className }) => (
  <Files id="druki-do-pobrania" className={className}>
    <Container>
      <Content>
        <div className="content-left">
          <SectionTitle title="Druki do pobrania" color={color.white} mb="10" />
          <Text text="Przydatne dokumenty do pobrania." color={color.white} />
        </div>
        <div className="content-right">
          <a href="#">
            <FlexBox align="center" p="20px">
              <Icon icon={<DownloadSVG />} size="26" color={color.blue40}/>
              <Text interline="22" color={color.white} pl="10">Deklaracje przynależności  lekarz , pielęgniarka , położna</Text>
            </FlexBox>
          </a>
          <a href="#">
            <FlexBox align="center" p="20px">
              <Icon icon={<DownloadSVG />} size="26" color={color.blue40}/>
              <Text interline="22" color={color.white} pl="10">Oświadczenie o upoważnieniu/odmowie upoważnienia dla osoby bliskiej do informacji 
o stanie zdrowia i udzielanych swiadczeniach zdrowotnych oraz dokumentacji medycznej</Text>
            </FlexBox>
          </a>
          <a href="#">
            <FlexBox align="center" p="20px">
              <Icon icon={<DownloadSVG />} size="26" color={color.blue40}/>
              <Text interline="22" color={color.white} pl="10">Wniosek o udostępnienie dokumentacji medycznej</Text>
            </FlexBox>
          </a>
        </div>
      </Content>
    </Container>
  </Files>
)

export default FilesSection
