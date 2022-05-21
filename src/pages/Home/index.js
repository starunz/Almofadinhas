import { Container } from "./style";
import { ContainerCarrosel } from "../../components/carrosel/style";

import Logo from "../../components/logo";
import { Sobre } from "../../components/sobre/sobre";
import { Multi } from "../../components/carrosel/Carrosel";
import { FooterMenu } from "../../components/footer/footer";

export default function Home(){
    return (
        <> 
            <Container>
                <Logo/>
                <Sobre/>
            </Container>

            <ContainerCarrosel>
                <Multi/>
            </ContainerCarrosel>
            
            <FooterMenu/>
        </>
    )
}