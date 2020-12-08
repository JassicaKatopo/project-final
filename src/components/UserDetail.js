import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const UserDetail = ({ getUser, match, userDetail }) => {
  useEffect(() => {
    getUser(match.params.login);
    // elint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    company,
    blog,
    html_url,
    followers,
    following,
    public_gists,
    public_repos
  } = userDetail;

  return(
    <Container className="mt-4">
      <Link to="/"><Button className="mb-4">Back to Home</Button></Link>

      <Card body>
        <Row>
          <Col>
            <Image src={avatar_url} rounded style={{width: '150px'}} />
            <h2>{name}</h2>
            <p>{location}</p>
          </Col>
          
          <Col>
            <Button href={html_url}>Visit GitHub Profile</Button>

            <h3>Bio</h3>
            <p>{bio}</p>

            <ul className="list-group">
              <li className="list-group-item">Username : {login}</li>
              <li className="list-group-item">Company : {company}</li>
              <li className="list-group-item">Blog : {blog}</li>
            </ul>
          </Col>
        </Row>
      </Card>

      <Card body className="my-4 text-center">
        <Row>
          <Col>
            <Badge variant="primary">Followers: {followers}</Badge> {' '}
            <Badge variant="success">Following: {following}</Badge>  {' '}
            <Badge variant="danger">Public Repos: {public_repos}</Badge>  {' '}
            <Badge variant="warning">Public Gists: {public_gists}</Badge>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserDetail;
