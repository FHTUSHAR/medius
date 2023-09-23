import React, { useState } from 'react';

const ModalA = ({ closeModal, openModal, openModal1, showModal }) => {


    return (
        <div>


            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Example Modal A</h5>

                        </div>
                        <div className="modal-body">
                            <p>This is the content of the modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button style={{ color: '#46139f' }} className="btn btn-lg " onClick={openModal} type="button" >All Contacts</button>

                            <button style={{ color: '#ff7f50' }} className="btn btn-lg " onClick={openModal1} type="button" >US Contacts</button>
                            <button style={{ color: '#46139f' }} className="btn btn-lg " type="button" onClick={closeModal} >Close</button>
                            {/* <button type="button" className="btn btn-secondary" onClick={handleModalToggle}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleModalToggle}>
                                Save changes
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalA;
