import React from 'react';
import { Card, CardImg, CardText,
  CardTitle, Button, Row } from 'reactstrap';

const Muse = {
    Nom : "Muse",
    Date : "25/10/2019",
    Prix : 153
}

const Artiste = (props) => {
  return (
    <div>
      <Card>
        <Row>
        <CardImg top width="100%" src="https://kinepolis.fr/sites/kinepolis.fr/files/styles/slider_16_9_960/public/a-visuals/Muse_FRFA.jpg?itok=fM3lvhJ3" alt="Muse Concert" />
        <CardTitle>{Muse.Nom}</CardTitle>
        <CardText>{Muse.Date}</CardText>
        <CardText>{Muse.Prix}</CardText>
        <Button>Plus D'Infos</Button>
        </Row>
      </Card>
    </div>
  );
};

export default Artiste;