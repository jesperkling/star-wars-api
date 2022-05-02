import { useState, useEffect } from 'react'
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import swapi from '../services/swapi'

const Films = () => {
	const [films, setFilms] = useState("")
	const [page, setPage] = useState(1)

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
					{films && films.results.map((films, id) => (
						<Col key={id}>
							<Card className='mb-4'>
								<CardHeader>{films.title}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Episode: {films.episode_id}
									</ListGroupItem>
									<ListGroupItem>
										Released: {films.release_date}
									</ListGroupItem>
									<ListGroupItem>
										Characters: {films.characters.length}
									</ListGroupItem>
								</ListGroup>

								<Card.Body>
									<Button
										className='btn'
										as={Link}
										to={`/films/${films.episode_id}`}
									>Read More</Button>
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
							disabled={page + 1 >= page}
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

export default Films