import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MobileToast = ({show}) => {
  useEffect(() => {
    if (show && window.innerWidth < 768) {
      toast.info('For better experience, we recommend using CodeCompete on desktop', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
            background: '#fbbf24', 
            color: '#1c1917', 
            border: '1px solid #d97706', 
            fontWeight: '500'
          },
          iconTheme: {
            primary: '#000',
            secondary: '#fbbf24'
          }
      });
    }
  }, [show]);

  return (
    <ToastContainer/>
  );
};

export default MobileToast;