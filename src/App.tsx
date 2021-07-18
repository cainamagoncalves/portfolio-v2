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
    <div className="App">
      <Header onHandleOpenNewSendMailModal={handleOpenNewSendMailModal}/>
      <Main />
      <ScrollToTopButton />
      <ToastContainer />
      <SendMail 
        isOpen={isNewSendMailModalOpen}
        onRequestClose={handleCloseNewSendMailModal}
      />
    </div>
  );
}

export default App;
