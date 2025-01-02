import logoImg from 'assets/logoHeader.png';

import { Container, Image, Title } from './styles';

const Header = () => (
  <Container>
    <Image>
      <img src={logoImg} />
    </Image>
    <Title>
      <span>Скороговорки</span>
    </Title>
  </Container>
);

export default Header;
