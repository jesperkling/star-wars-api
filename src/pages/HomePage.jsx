import Image from 'react-bootstrap/Image'
import Yoda from '../assets/images/yoda.jpg'

const HomePage = () => {
    return (
        <div className='justify-content-center align-items-center text-center'>
            <h1> Welcome to my Star Wars Encyclopedia </h1>

            <Image src={Yoda} fluid></Image>
        </div>
    )
}

export default HomePage
