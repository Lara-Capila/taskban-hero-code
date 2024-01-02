import { ToastContent, toast } from 'react-toastify';

type NotifyTypesProps = {
  id: string;
  content: ToastContent;
};

const notify = () => {
  const success = ({ id, content }: NotifyTypesProps) => {
    const customId = `toast-${id}`;

    toast.success(content, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: customId
    });
  };

  const error = ({ id, content }: NotifyTypesProps) => {
    const customId = `toast-${id}`;

    toast.error(content, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: customId
    });
  };

  return {
    success,
    error
  };
};

export default notify;
