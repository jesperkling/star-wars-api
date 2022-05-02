import Image from 'react-bootstrap/Image'
import Yoda from '../assets/images/yoda.jpg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='justify-content-center align-items-center text-center'>
            <h1> Welcome to my Star Wars Encyclopedia </h1>

            <Image src={Yoda} fluid></Image>

            <Button
				className='btn m-4'
				as={Link}
				to={`/films`}
                variant='warning'
			>Films</Button>

            <Button 
                className='btn m-4'
				as={Link}
				to={`/people`}
                variant='warning'
            >People</Button>
        </div>
    )
}

export default HomePage
