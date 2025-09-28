import { Modal } from 'react-native';
import type { ErrorModalProps } from '../interfaces/ErrorModal';

const ErrorModal = ({ message }: ErrorModalProps) => {
  return (
    <Modal animationType="fade" backdropColor="#00000080" visible={!!message}>
      {/* TODO: Insert content */}
    </Modal>
  );
};

export default ErrorModal;
