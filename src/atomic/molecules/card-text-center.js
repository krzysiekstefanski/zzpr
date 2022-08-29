import React from "react"
import Whitebox from "../atoms/white-box"
import Text from "../atoms/text"

const CardTextCenter = ({ text, width, maxWidth, p, mb, mbXL }) => (
  <Whitebox flex justify="center" width={width} maxWidth={maxWidth} p={p} mb={mb} mbXL={mbXL}>
    <Text text={text} size="40" interline="48" weight="700" center />
  </Whitebox>
)

export default CardTextCenter
