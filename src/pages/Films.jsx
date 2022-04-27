import { useState, useEffect } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import swapi from '../services/swapi'

const Films = () => {
	const [films, setFilms] = useState("")

	const getFilms = async () => {
		const data = await swapi.getFilms()
		setFilms(data)
		console.log(data.results)
	}

	useEffect(() => {
		getFilms()
	}, [])
	
	return (
		<>
			<Container>
				<h1 className='text-center'>Films</h1>

				<Row xs={1} md={2} lg={3}>
					{films && films.results.map((films) => (
						<Col>
							<Card className='mb-4'>
								<CardHeader>{films.title}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Episode: {films.episode_id}
									</ListGroupItem>
									<ListGroupItem>
										Release Date: {films.release_date}
									</ListGroupItem>
								</ListGroup>

								<Card.Body>
									<Button
										className='btn'
										as={Link}
										to={`/films/${films.episode_id}`}
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

export default Films