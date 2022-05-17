import { Container } from './style';
import Almofadinhas from '../../assets/Almofadinhas.mp4';

export default function Logo (){
    return(
        <Container>
            <video src={Almofadinhas} type='video/mp4' autoPlay loop width='25%'></video>
        </Container>
    )
}