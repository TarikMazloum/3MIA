import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex">
      <Card style={{ width: '31rem' }}>
        <Card.Img variant="top" src="lalala4.jpg" />
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="lalala5.jpg" />
      </Card>

      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src="lalala6.jpg" />
      </Card>
    </div>
  );
}

export default CardExample;