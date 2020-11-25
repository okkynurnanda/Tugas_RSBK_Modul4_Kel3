import React from 'react'
import styled from 'styled-components'

import Score from './Score'
import Timer from './Timer'
import Foul from './Foul'


const Container = styled.div`
  width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
`

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`


function PanelScoreboard(props) {
  const duration = 20 // in minutes

  const fouls = [
    {
      point: 0
    },
    {
      point: 0
    },
  ]

  const { teams } = props
  console.log(props.scores)
  return (
    <Container>
      <Panel>
        {teams.map((team) => {
          return (
            <Score team={team} />
          )
        })}
      </Panel>
      <Timer duration={duration} />
      <h4>FOULS</h4>
      <Panel>
        {fouls.map((foul) => {
          return (
            <Foul point={foul.point} />
          )
        })}
      </Panel>
    </Container>
  )
}

export default PanelScoreboard