import { useState, useEffect } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import swapi from '../services/swapi'
import { getIdFromUrl } from "../helper/index"

const People = () => {
	const [people, setPeople] = useState('')
	const [page, setPage] = useState(1)

	const getPeople = async (page) => {
		const data = await swapi.getPeople(page)
		setPeople(data)
	}

	useEffect(() => {
		getPeople(page)
	}, [page])

	return (
		<>
			<Container>
				<h1 className='text-center'>People</h1>

				<Row xs={1} md={3} lg={5}>
					{people && people.results.map((people, id) => (
						<Col key={id}>
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
										to={`/people/${getIdFromUrl(people.url)}`}
									>Read more</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				
				<div className='d-flex justify-content-between align-items-center mt-4'>
					<div className='prev'>
						<Button
							disabled={page === 1}
							onClick={() => setPage(prevValue => prevValue - 1)}
							variant='primary'
						>
							Previous Page
						</Button>
					</div>
					<div className='page'>Page: {page}</div>
					<div className='next'>
						<Button
							disabled={!people.next}
							onClick={() => setPage(prevValue => prevValue + 1)}
							variant='primary'
						>
							Next Page
						</Button>
					</div>
				</div>
			</Container>
		</>
	)
}

export default People