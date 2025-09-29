import { Modal } from 'react-native';
import type { ErrorModalProps } from '../interfaces/ErrorModal';
import Text from './Text';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.ImageBackground`
  width: 325px;
  height: 436px;
`;

const Content = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  row-gap: 18.5px;
  padding-block-start: 82.5px;
`;

const Message = styled(Text)`
  padding-inline: 60px;
  text-align: center;
  text-shadow: 0 0 2.5px rgb(0 0 0 / 1);
`;

const DismissButton = styled.Pressable`
  border-radius: 10px;
  padding: 10px 30px;
  filter: drop-shadow(0 0 5px rgb(0 0 0));
  background-color: rgb(0 0 0 / 0.65);
`;

const DismissButtonText = styled(Message)`
  padding: 0;
  color: rgb(177 164 144);
`;

const ErrorModal = ({ message, setMessage }: ErrorModalProps) => {
  function handlePress(): void {
    setMessage('');
  }

  return (
    <Modal
      animationType="fade"
      backdropColor="rgba(0 0 0 / 0.5)"
      visible={!!message}
    >
      <Container>
        <BackgroundImage
          source={require('../assets/images/error-modal.png')}
          imageStyle={{ resizeMode: 'contain' }}
        >
          <Content>
            <Message>{message}</Message>

            <DismissButton onPress={handlePress}>
              <DismissButtonText>Dismiss</DismissButtonText>
            </DismissButton>
          </Content>
        </BackgroundImage>
      </Container>
    </Modal>
  );
};

export default ErrorModal;
