// OffersModal.jsx
import { useState } from 'react';
import React from 'react'; 
// import fileimg1 from '../../../assets/images/fileimg1.png'
// import buttonimg from '../../../assets/images/button.png'
// import FileDetailsModal from './FileDetailsModal'

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,


} from 'reactstrap';

const DocumentsModal = ({ modal, toggleModal, location, description, Company, documents }) => {

    const [activeLink, setActiveLink] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to handle modal visibility

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <>
        <Modal isOpen={modal} toggle={toggleModal} size="" className='' style={{ marginTop: "5%", maxWidth: "35%" }}>
            {/* <ModalHeader toggle={toggleModal}>Documents</ModalHeader> */}


            <ModalBody className='' style={{ paddingBottom: "16rem" }} >
                <ModalHeader toggle={toggleModal} className='border-0'>

                </ModalHeader>
                <Row className='mb-4'>
                    <Col xs={12} className='text-center'>
                        <h4>Documents</h4>
                    </Col>
                </Row>



                <Row className='m-2 d-flex gap-2 rounded-3' style={{ border: "1px solid #EAEEF4" }}>

                    <Col xs={12} className='d-flex justify-content-between flex-wrap align-item-center'>
                        {/* <img src={fileimg1} alt="fg" className='m-2 img-fluid' style={{ maxWidth: '80px', height: 'auto' }} /> */}
                        <Col className='p-1 flex-grow-1'>
                            <h6 style={{ marginBottom: '0.5rem' }}>contract.pdf</h6>
                            <span>15 mb</span>
                        </Col>
                        {/* <button className='m-2 bg-white border-0 h-auto mt-3 'onClick={handleModalShow}><img src={buttonimg} alt='' className='img-fluid' /></button> */}
                    </Col>
                </Row>



                <Row className="m-2">
                    <Col xs={12} className="d-flex align-items-center flex-wrap ">
                        <a href="#"
                            className={`me-4 anchor-text ${activeLink === 'posted' ? 'border-bottom border-black ' : ''}`}
                            onClick={() => handleLinkClick('posted')}
                        >Bathroom</a>
                        <a
                            href="#"
                            className={` anchor-text ${activeLink === 'accepted' ? 'border-bottom border-black ' : ''}`}
                            onClick={() => handleLinkClick('accepted')}
                        >Kitchen</a>
                    </Col>
                    <hr className="border w-100 " />
                </Row>



                {documents.map((file, index) => (
                    <Row key={index} className='m-3 d-flex gap-2 rounded-3 ' style={{ border: '1px solid #EAEEF4' }}>
                        <Col xs={12} className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                            <img src={file.imgSrc} alt="fg" className='m-2 img-fluid' />
                            <Col className='p-1 flex-grow-1'>
                                <h6 style={{ marginBottom: '0.5rem', }}>{file.name}</h6>
                                <span>{file.size}</span>
                            </Col>
                            <Col xs='auto' className='m-3 d-flex justify-content-end' style={{color: "#50A75E"}}>
                                <i className="bi bi-clock me-2" title="Waiting icon"></i> {file.status}
                            </Col>
                            <UncontrolledDropdown className=" d-flex mt-2">
                                <DropdownToggle
                                    //   type="menu"
                                    //   id="dropdownMenuButton1"
                                    className='bg-white text-dark border-0  '
                                >
                                    <i className="mdi mdi-dots-vertical"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <li>
                                        <DropdownItem href="#">Action</DropdownItem>
                                    </li>
                                    <li>
                                        <DropdownItem href="#">Another action</DropdownItem>
                                    </li>
                                    <li>
                                        <DropdownItem href="#">
                                            Something else here
                                        </DropdownItem>
                                    </li>
                                    <li>
                                        <DropdownItem href="#">
                                            Something else here
                                        </DropdownItem>
                                    </li>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                ))}

            </ModalBody>
           
       </Modal>
         {/* {showModal && (
            <Modal isOpen={showModal} toggle={handleModalClose} size="lg">
                <ModalHeader toggle={handleModalClose}>File Details</ModalHeader>
                <ModalBody>
                    <p>Details about the selected file will go here...</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleModalClose}>Close</Button>
                </ModalFooter>
            </Modal>
        )}  */}
                    {/* <FileDetailsModal showModal={showModal} handleModalClose={handleModalClose} /> */}

        </>
    );
};

export default DocumentsModal;
