import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import usericon from '../../../assets/images/usericon.png'
import kitchenicon from '../../../assets/images/kItchenicon.png'
import bathroomicon from '../../../assets/images/bathroomicon.png'
import {

  Card,
  CardBody,
  Button,
  Container,
  Row,
  Col,
  Input,

} from 'reactstrap';

const getIconForTag = (tag) => {
  if (tag.toLowerCase() === 'bathroom') return <img src={bathroomicon} className='me-2' />;
  if (tag.toLowerCase() === 'kitchen') return <img src={kitchenicon} className='me-2' />;

  return null;
};
const PostJob = ({ title, location, description, tags, responses }) => {
  return (
    <Container fluid className="">
      <Row className="mb-4">
        <Col xs="12" md="6" className="d-flex justify-content-between align-items-center  mb-md-0">
          <div className="search-box w-50 " style={{ position: 'relative' }}>
            <Input type="search" placeholder="Search..." className="w-75 rounded-4" />
            <i className="bx bx-search-alt-2 icon-style"></i>
          </div>
    
        </Col>
        <Col xs="12" md="6" className="d-flex justify-content-between align-items-center">
          <Button color="primary" className="ms-auto">+ Post new job</Button>
        </Col>
      </Row>
      <Card className="mb-4 shadow-sm mt-5" style={{ fontFamily: "montserrat" }}>
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0"> <img src={usericon} className='me-2' />{title}</h5>
            <span className=" p-2 answer-text">{responses} Answers:{responses !== 1 ? 's' : ''}</span>
          </div>
          <p className="text-muted mb-1">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {location}
          </p>
          <p className="mb-3">{description}</p>
          <div className="d-flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Button key={index} color="info" className="btn-sm border-0" style={{ background: '#F4F8FC', color: "#41619A" }}>
                {getIconForTag(tag)}
                {tag}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

PostJob.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  responses: PropTypes.number.isRequired,
};


export default PostJob;