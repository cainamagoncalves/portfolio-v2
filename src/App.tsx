import { SendMail } from "./components/SendMail";
import { ToastContainer } from 'react-toastify';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { useLayoutEffect, useState } from "react";
import AOS from 'aos'


function App() {

  useLayoutEffect(() => {
    AOS.init({
      duration: 500
    })
  }, [])

  const [isNewSendMailModalOpen, setIsNewSendMailModalOpen] = useState(false);

  function handleOpenNewSendMailModal() {
    setIsNewSendMailModalOpen(true);
  }

  function handleCloseNewSendMailModal() {
    setIsNewSendMailModalOpen(false);
  }

  return (
    <>
      <Header onHandleOpenNewSendMailModal={handleOpenNewSendMailModal}/>
      <Main />
      <ToastContainer />
      <ScrollToTopButton />
      <SendMail 
        isOpen={isNewSendMailModalOpen}
        onRequestClose={handleCloseNewSendMailModal}
      />
    </>
  );
}

export default App;
