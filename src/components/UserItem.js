import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user: {avatar_url, login}}) => {
  return (
    <Card body className="text-center">
      <Image src={avatar_url} roundedCircle className="avatar-img" />
      <h3>{login}</h3>
      <div>
        <Link to={`/userDetail/${login}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </div>
    </Card>
  ); 
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
