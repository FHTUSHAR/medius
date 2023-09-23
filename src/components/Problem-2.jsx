import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';
import { useEffect } from 'react';

const Problem2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [data, setData] = useState([])
    const [us, setUs] = useState([])

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => {
                setData(data.results)
                // const usdata = data.results.find(dta => dta.country.name === 'United States')
                // setUs([...us, usdata])
                data.results.map(dta => {
                    if (dta.country.name = 'United States') {
                        setUs([...us, dta])
                    }
                })

            })
    }, [])
    console.log(us)
    const openModal = () => {
        setShowModal(true);
        setShowModal1(false);
    };

    const openModal1 = () => {
        setShowModal(false);
        setShowModal1(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowModal1(false);
    };


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button style={{ color: 'white', backgroundColor: '#46139f' }} className="btn btn-lg " onClick={openModal} type="button" >All Contacts</button>

                    <button style={{ color: 'white', backgroundColor: '#ff7f50' }} className="btn btn-lg " onClick={openModal1} type="button" >US Contacts</button>
                </div>

                <ModalA openModal={openModal} openModal1={openModal1} showModal={showModal} closeModal={closeModal} data={data}></ModalA>
                <ModalB openModal1={openModal1} openModal={openModal} showModal1={showModal1} closeModal={closeModal} us={us}></ModalB>
            </div>



        </div>
    );
};

export default Problem2;