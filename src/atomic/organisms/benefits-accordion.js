import React from "react"
import styled from "styled-components"
import { Tabs, Panel, useTabState } from "@bumaga/tabs"
import { color } from "../../components/colors"
//import { shadow } from "../atoms/styles/shadows"
import GalleryGrid from "../molecules/gallery-grid"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto 24px;
  
  @media (min-width: 769px) {
    margin: 0 auto 52px;
  }

  button {
    margin-right: 32px;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
`

const PanelsWrapper = styled.div`
  display: block;
`

const Scroller = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Button = styled.button`
  display: inline;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  color: ${color.black};
  font-family: Albert Sans, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: ${color.blue40};
  }

  &.active {
    color: ${color.blue40};
    font-weight: 700;
  }
`

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

const BenefitsAccordion = ({ clickHandler, data }) => (
  <Tabs>
    <Wrapper>
      <TabsWrapper>
        <Scroller>
          {data.map(kategoria => (
            <Tab>{kategoria.galeriaNazwa}</Tab>
          ))}
        </Scroller>
      </TabsWrapper>
      <PanelsWrapper>
        {data.map(kategoria => (
        <Panel>
          <GalleryGrid clickHandler={clickHandler} images={kategoria.galeriaKategorie} />
        </Panel>
        ))}
      </PanelsWrapper>
    </Wrapper>
  </Tabs>
)

export default BenefitsAccordion
