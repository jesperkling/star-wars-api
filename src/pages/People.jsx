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

				<Row xs={1} md={3} lg={5}>
					{people && people.results.map((people) => (
						<Col>
							<Card className='mb-4'>
								<CardHeader>{people.name}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Gender: {people.gender}
									</ListGroupItem>
									<ListGroupItem>
										Born: {people.birth_year}
									</ListGroupItem>
									<ListGroupItem>
										In: {people.films.length} movies
									</ListGroupItem>
								</ListGroup>

								<Card.Body>
									<Button
										className='btn'
										as={Link}
										to={`/people/${people.people_id}`}
									>Read more</Button>
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