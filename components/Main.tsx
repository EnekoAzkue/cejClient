import styled from 'styled-components/native';
import Navigation from './Navigation';

const Container = styled.View`
  height: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};

export default Main;
