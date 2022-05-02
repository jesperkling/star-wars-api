import { useEffect, useState } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useNavigate, useParams } from 'react-router-dom'

import swapi from '../services/swapi'

const Film = () => {
	const [film, setFilm] = useState()
	const { id } = useParams()
	const navigate = useNavigate()

	const getFilm = async (id) => {
		const data = await swapi.getFilm(id)
		setFilm(data)
	}

	useEffect(() => {
		getFilm(id)
	}, [id])

	return (
		<>
			<Container>
				<Row xs={1} md={2} lg={3}>
					{film && (
						<Col>
							<Card className='mb-4'>
								<CardHeader>{film.title}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Episode: {film.episode_id}
									</ListGroupItem>
									<ListGroupItem>
										Director: {film.director}
									</ListGroupItem>
									<ListGroupItem>
										Producer: {film.producer}
									</ListGroupItem>
									<ListGroupItem>
										Release date: {film.release_date}
									</ListGroupItem>
								</ListGroup>

								<Card.Body>
									<Button
										className='btn'
										onClick={() => navigate(-1)}
									>Back</Button>
								</Card.Body>
							</Card>
						</Col>
					)}
				</Row>
			</Container>
		</>
	)
}

export default Film