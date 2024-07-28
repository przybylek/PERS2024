import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'

const Program = () => (
    <Container className="bg-white section p-4 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Wednesday, August 28th</th><th>session chair: Justyna Głogowska</th></tr>

        <tr><td className='text-nowrap'>16:00 - 16:15</td><td>Development of Collaborative Business Intelligence Framework for Tourism Analysis (<em>Olga Cherednichenko and Oleksandr Sutiahin</em>)</td></tr>
        <tr><td className='text-nowrap'>16:15 - 16:30</td><td>Session-based Recommendation with Graph Neural Networks with an Examination of the Impact of Local and Global Vectors (<em>Justyna Głogowska, Dariusz Kobiela and Szymon Mielewczyk</em>)</td></tr>
        <tr><td className='text-nowrap'>16:30 - 16:45</td><td>Senselife: Service Recommendation and Frailty Prevention through Knowledge Models (<em>Ghassen Frikha, Xavier Lorca, Pingaud Herve, Adel Taweel, Christophe Bortolaso, Katarzyna Borgiel and Elyes Lamine</em>)</td></tr>        
        <tr><td className='text-nowrap'>16:30 - 16:45</td><td>Evaluating Diversity in Sequential Group Recommendations (<em>Haider Zulfiqar, Emilia Lenzi and Kostas Stefanidis</em>)</td></tr>        

      </tbody>
    </Table>
  </Container>
)


/*
const Program = () => (
    <Container className="bg-white section p-4 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>
    <h3>TBA...</h3>
  </Container>
)
*/


export default Program


