import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const DashboardComponent = ({props}) =>{
  const {name, image_url} = props
  console.log(props)
  return (
    <Card>
      <CardHeader>
        {name}
      </CardHeader>
      <CardBody>
      </CardBody>
    </Card>
  )
}

export default DashboardComponent