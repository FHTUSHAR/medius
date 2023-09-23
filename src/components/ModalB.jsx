import React from 'react';

const ModalB = ({ closeModal, openModal, openModal1, showModal1, us }) => {


    return (
        <div>


            <div className={`modal ${showModal1 ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal1 ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Example Modal B</h5>

                        </div>
                        <div className="modal-body">
                            {us.map((dta, i) => (
                                <li key={i} className='d-flex'>
                                    <p>{dta.phone}</p><span> </span>  <p>{dta.country.name}</p>
                                </li>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button style={{ color: 'white', backgroundColor: '#46139f' }} className="btn btn-lg " onClick={openModal} type="button" >All Contacts</button>

                            <button style={{ color: 'white', backgroundColor: '#ff7f50' }} className="btn btn-lg " onClick={openModal1} type="button" >US Contacts</button>
                            <button style={{ color: 'white', backgroundColor: '#46139f' }} className="btn btn-lg " type="button" onClick={closeModal} >Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalB;
