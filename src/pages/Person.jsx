import swapi from "../services/swapi"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Card, Container, Col, ListGroup, Row, ListGroupItem } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Link } from 'react-router-dom'
import { getIdFromUrl } from "../helper/index"

const Person = () => {
	const [person, setPerson] = useState([])
	const [films, setFilms] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	const getPerson = async (id) => {
		const data = await swapi.getPerson(id)
		setPerson(data)
		setFilms(data.films)
		console.log(data)
	}

	useEffect(() => {
		getPerson(id)
	}, [id])



	return (
		<>
			<Container>
				<Row xs={1} md={3} lg={5}>
					{person && (
						<Col>
							<Card className='mb-4'>
								<CardHeader>{person.name}</CardHeader>
								<ListGroup>
									<ListGroupItem>
										Gender: {person.gender}
									</ListGroupItem>
									<ListGroupItem>
										Born: {person.birth_year}
									</ListGroupItem>
									<ListGroupItem>
										Height: {person.height}
									</ListGroupItem>
									<ListGroupItem>
										Mass: {person.mass}
									</ListGroupItem>
									<ListGroupItem>
										Hair color: {person.hair_color}
									</ListGroupItem>
									<ListGroupItem>
										Skin color: {person.skin_color}
									</ListGroupItem>
									<ListGroupItem>
										Eye color: {person.eye_color}
									</ListGroupItem>
								</ListGroup>

								<CardHeader>Films</CardHeader>
								<ListGroup>
									{films.map(films => (
										<Link 
											to={`/films/${getIdFromUrl(films)}`}
											key={getIdFromUrl(films)}>
											<ListGroupItem>Film {getIdFromUrl(films)}</ListGroupItem>
										</Link>
									))}
									
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

export default Person