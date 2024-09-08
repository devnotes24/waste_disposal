import { Toaster } from 'react-hot-toast';
const ToastConfig = () => {

    return (
    <Toaster
      position="top-center" // Note: `top-center` is the correct position value, not `top-centre`
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 3000,
        },
        style: {
          fontSize: '16px',
          maxWidth: '400px',
          padding: '12px 18px',
          backgroundColor: 'white',
          color: 'black',
        },
      }}
    />
  );
};

export default ToastConfig;
