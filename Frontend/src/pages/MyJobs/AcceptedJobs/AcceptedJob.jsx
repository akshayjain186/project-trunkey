import { useState } from 'react'
import image1 from '../../../assets/images/companyimg.png'
import bathroomicon from '../../../assets/images/bathroomicon.png'
import icon2 from '../../../assets/images/icon2.png'
import DocumentsModal from "../AcceptedJobModals/DocumentsModal"
import fileimg2 from '../../../assets/images/fileimg2.png'
import "../MyJobs.css"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

const AcceptedJob = ({ location, description, Company, Status }) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }


    const documents = [
        { name: 'contract.pdf', size: '15 MB', imgSrc: fileimg2, buttonImgSrc: '' ,status :"Accepted"},
        { name: 'drawing.pdf', size: '10 MB', imgSrc: fileimg2, buttonImgSrc: '' ,status :"Accepted"},
        { name: 'offer.pdf', size: '5 MB', imgSrc: fileimg2, buttonImgSrc: '',status :"Accepted" },
        { name: 'report.pdf', size: '20 MB', imgSrc: fileimg2, buttonImgSrc: '' ,status :"Accepted"},

    ];


    return (
        <Container fluid style={{ fontFamily: "montserrat" }}>
            <Row className="mb-4 ">
                <Col xs="12" md="6" className="d-flex justify-content-between align-items-center mb-md-0">
                    <div className="search-box w-50" style={{ position: 'relative' }}>
                        <Input type="search" placeholder="Search..." className="w-75 rounded-4" />
                        <i className="bx bx-search-alt-2 icon-style"></i>
                    </div>
                </Col>
            </Row>

            <Row className='gap-2 py-1'>
                <Row style={{ color: "#A8AFB9" }}>
                    <Col md="3">
                        <span>Address/Name</span>
                    </Col>
                    <Col md="2" className=' '>
                        <span>Services</span>
                    </Col>

                    <Col md="3" className=''>
                        <span>Company</span>
                    </Col>
                    <Col md="3" className=''>
                        <span>Status</span>
                    </Col>
                    <Col md="1">
                    </Col>
                </Row>

                <Card className="mb-3 p-4">
                    <Row className="align-items-center">
                        <Col md={3}>
                            <div className='lh-lg'>
                                <strong>{location}</strong>
                                <div className="text-muted">{description}</div>
                            </div>
                        </Col>
                        <Col md={2} className='d-flex'>
                            <div className='rounded-4 p-2 me-2' style={{ background: "#EAEEF4" }}>
                                <img src={bathroomicon} alt="" />
                            </div>
                            <div className='rounded-4 p-2 me-2' style={{ background: "#EAEEF4" }}>
                                {/* <img src={icon2} alt="" /> */}
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <img src={image1} alt="" className="logo-img" />
                                </div>
                                <div>{Company}</div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="text-muted">
                                <i className="bi bi-clock" title="Waiting icon"></i> {Status}
                            </div>
                        </Col>
                        {/* <Col md={2} className="text-end">
                           
                            <Button className='see-offer-btn p-2' style={{background:"white", color:"#41619A"}}>  <i className='bx bx-file fs-5'  style={{ marginRight: "10px", }}></i>See offers</Button>
                        </Col> */}
                        <Col md={2} className="text-end text-md-end text-center">
                            <Button
                                className='  w-75 w-md-auto'
                                style={{ background: "white", color: "#41619A", display: "flex", alignItems: "center", justifyContent: "center" }}
                                onClick={toggleModal}
                            >
                                <i className='bx bx-file fs-5' style={{ marginRight: "5px" }}></i>
                                See offers
                            </Button>
                        </Col>

                    </Row>
                </Card>
            </Row>

            <DocumentsModal
                modal={modal}
                toggleModal={toggleModal}
                location={location}
                description={description}
                Company={Company}
                documents={documents}
            />
        </Container>
    )
}

export default AcceptedJob