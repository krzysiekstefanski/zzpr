import React from "react"
import styled from "styled-components"
import { color } from "../../../components/colors"
import Container from "../../partials/container"
import SectionTitle from "../../atoms/section-title";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import Link from "../../atoms/link";
import Whitebox from "../../atoms/white-box";
import { FlexBox } from "../../../components/flexbox";
import PhoneSVG from "../../../images/phone.inline.svg"
import MailSVG from "../../../images/mail.inline.svg"
import { typography } from "../../../components/typography";
import Icon from "../../atoms/icon";

const Contact = styled.section`
padding: 48px 0 0;
position: relative;

@media (min-width: 769px) {
  padding: 80px 0;
}
`

const ContactSection = ({ className, data }) => (
  <Contact id="kontakt" className={className}>
    {console.log(data)}
    <Container>
      <SectionTitle title="Dane kontaktowe" upperline lineWidth="48px" mb="24px" mbMD="64px" />
      <FlexBox column directionMD="row" justify="space-between" mb="24px" mbMD="80px">
        <FlexBox column width="100%" widthMD="30%" maxWidthMD="253px" mb="20px" mbMD="0">
          <SectionTitle size="3" typography={typography.h400} title={data.kontaktKolumna1.kontaktKolumna1Tytul} pt="0" pb="8px"/>
          <Text mb="8px" mbMD="16px">{data.kontaktKolumna1.kontaktKolumna1GodzinyOtwarcia}</Text>
          <Text mb="8px" mbMD="40px">{`${data.kontaktKolumna1.kontaktKolumna1Adres}<br />${data.kontaktKolumna1.kontaktKolumna1KodPocztowy}`}</Text>
          <Link flex href={`tel:48${data.kontaktKolumna1.kontaktKolumna1NumerTelefonu}`} color={color.neutral20} mb="8px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>{data.kontaktKolumna1.kontaktKolumna1NumerTelefonu}</Link>
          <Link flex href={`mailto:${data.kontaktKolumna1.kontaktKolumna1AdresEmail}`} noParser><Icon icon={<MailSVG />} size="22px" mr="10px"/>{data.kontaktKolumna1.kontaktKolumna1AdresEmail}</Link>
        </FlexBox>
        <FlexBox column width="100%" widthMD="30%" maxWidthMD="253px" mb="20px" mbMD="0">
          <SectionTitle size="3" title="Rejestracja telefoniczna czynna od 8.30 do 17.00" pt="0" pb="16px"/>
          <Text mb="8px" mbMD="16px">Rejestracja - zamawianie recept</Text>
          <Link flex href="tel:48914221830" color={color.neutral20} mb="8px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>91 422 18 30</Link>
          <Link flex href="tel:48914223231" color={color.neutral20} mb="8px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>91 422 32 31</Link>
          <Link flex href="tel:48789292402" color={color.neutral20} mb="8px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>789 292 402</Link>
          <Link flex href="mailto:rejestracja1@nzozmedycy.pl" noParser><Icon icon={<MailSVG />} size="22px" mr="10px"/>rejestracja1@nzozmedycy.pl</Link>
        </FlexBox>
        <FlexBox column width="100%" widthMD="30%" maxWidthMD="253px">
          <Text mb="8px" mbMD="16px">Gabinet szczepień - 08.30-15.00</Text>
          <Link flex href="tel:48798702981" color={color.neutral20} mb="16px" mbMD="26px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>798 702 981</Link>
          <Text mb="8px" mbMD="16px">Rejestracja telefoniczna do specjalistów</Text>
          <Text mb="8px" mbMD="16px">poniedziałek - piątek 13.00-15.30</Text>
          <Link flex href="tel:48798702981" color={color.neutral20} mbMD="40px" noParser><Icon icon={<PhoneSVG />} size="22px" mr="10px"/>798 702 981</Link>
        </FlexBox>
      </FlexBox>
    </Container>
    <Container noPadding>
      <div style={{ height: '100%', width: '100%' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2376.8534245612605!2d14.537852!3d53.435329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093f30e95be5%3A0xee95bdac324113c2!2sMedycy%20-%20Niepubliczny%20zak%C5%82ad%20opieki%20zdrowotnej!5e0!3m2!1spl!2spl!4v1649125306117!5m2!1spl!2spl" width="600" height="450" frameborder="0" style={{ position: "relative", width: "100%", display: "block", height: "400px", border: "0" }} allowfullscreen=""></iframe>
      </div>
    </Container>
  </Contact>
)

export default ContactSection
