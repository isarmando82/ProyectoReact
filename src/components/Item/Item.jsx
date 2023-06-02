import Button from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { Link } from 'react-router-dom';

export const Item = ({ id, img, description, title, stock, price }) => {
  return (
     <Card className="item">
     <Card.Img variant="top" src={img} className="item__img" />
     <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Text>{description}</Card.Text>
       <Button variant="dark"><Link to={`/item/${id}`} className="link2">Detalle</Link></Button>
     </Card.Body>
   </Card>
  );
};
