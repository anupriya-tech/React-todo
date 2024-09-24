import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import Modelbox from './Modelbox';

function Model({ showModal }) {
  const backdropRoot = document.querySelector('#backdrop-root');
  const modelboxRoot = document.querySelector('#modelbox-root');

  return (
    <>
      {backdropRoot && ReactDOM.createPortal(
        <Backdrop showModal={showModal} />,
        backdropRoot
      )}
      {modelboxRoot && ReactDOM.createPortal(
        <Modelbox showModal={showModal} />,
        modelboxRoot
      )}
    </>
  );
}

export default Model;
