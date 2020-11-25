import React from 'react'
import styled from 'styled-components'

const ObjFoul = styled.div`
  text-align: center;
`

const PointFoul = styled.div`
  font-size: 24pt;
`

function Foul(props) {
  const [point, setPoint] = React.useState(props.point)

  const handleIncrement = () => {
    setPoint(point+1)
  }

  const handleDecrement = () => {
    if (point > 0) {
      setPoint(point-1)
    }
  }
  
  return (
    <ObjFoul>
      <PointFoul>
        {point}
      </PointFoul>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </ObjFoul>
  )
}

export default Foul