import { useState, useEffect } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import swapi from '../services/swapi'

const People = () => {
	const [people, setPeople] = useState("")

	const getPeople = async () => {
		const data = await swapi.getPeople()
		setPeople(data)
		console.log(data.results)
	}

	useEffect(() => {
		getPeople()
	}, [])

	return (
		<>
			<Container>
				<h1 className='text-center'>People</h1>

				<Row xs={1} md={2} lg={3}>
					{people && people.results.map((people) => (
						<Col>
							<Card className='mb-4'>
								<CardHeader>{people.title}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Name: {people.name}
									</ListGroupItem>
									<ListGroupItem>
										Born: {people.birth_year}
									</ListGroupItem>
								</ListGroup>

								<Card.Body>
									<Button
										className='btn'
										as={Link}
										to={`/people/${people.people_id}`}
									>Click here</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default People