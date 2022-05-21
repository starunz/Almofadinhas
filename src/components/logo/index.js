import { Container } from './style';
import Almofadinhas from '../../assets/Almofadinhas.mp4';

export default function Logo (){
    return(
        <Container>
            <video src={Almofadinhas} type='video/mp4' autoPlay loop muted width='20%' height='10%'></video>
        </Container>
    )
}