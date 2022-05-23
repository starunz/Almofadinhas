import { Container } from "./style";
import { ContainerCarrosel } from "../../components/carousel/style";

import Logo from "../../components/logo";
import { Sobre } from "../../components/sobre/sobre";
import { Multi } from "../../components/carousel/carousel";
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