import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <Spinner animation="border"  size="sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;