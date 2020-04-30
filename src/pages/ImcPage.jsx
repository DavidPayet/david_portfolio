import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavApp from '../components/NavApp';
import TextField from '@material-ui/core/TextField';
import ReactSpeedometer from "react-d3-speedometer";
import './ImcPage.scss';

const ImcPage = () => {
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [result, setResult] = useState('');
  const [interpretation, setInterpretation] = useState('');

  const calculate = () => {
    const imc = (kg / Math.pow(cm, 2) * 10000).toFixed(2)
    setResult(imc);
    setInterpretation(() => {
      if (imc < 16.50) {
        return "Vous souffrez d'une dénutrition ou êtes atteint d'une anorexie";
      } else if (imc >= 16.50 && imc < 18.50) {
        return "Vous êtes atteint de maigreur";
      } else if (imc >= 18.50 && imc < 25) {
        return "Vous avez une corpulance normale";
      } else if (imc >= 25 && imc < 30) {
        return "Vous êtes en surpoids";
      } else if (imc >= 30 && imc < 35) {
        return "Vous avez une obésité modérée";
      } else if (imc >= 35 && imc < 40) {
        return "Vous êtes atteint d'obésité sévère";
      } else if (imc > 40) {
        return "Vous êtes atteint d'obésité morbide ou massive";
      } else {
        return "valeur non reconnue"
      }
    });
  };

  return (
    <div className="Imc">
      <NavApp />
      <Container>
      <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10">
            <h1>IMC App</h1>
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
        </Container>
      <Container className="imc">
        <Row>
          <Col xl="1" lg="1" md="1" sm="1" xs="1" />
          <Col className="speedometer" xl="10" lg="10" md="10" sm="10" xs="10">
            <ReactSpeedometer
              needleHeightRatio={0.6}
              maxSegmentLabels={0}
              minValue={0}
              maxValue={50}
              segments={7777}
              value={Number(result)}
              textColor={"#D0FEFE"}
              startColor={"#D0FEFE"}
              endColor={"#017374"}
              width={200}
              height={200}
              thickness={4}
              ringWidth={20}
              needleColor={"#017374"}
            />
          </Col>
          <Col xl="1" lg="1" md="1" sm="1" xs="1" />
        </Row>
        <Row>
          <Col xl="3" lg="3" md="3" sm="1" xs="1" />
          <Col className="inputField" xl="6" lg="6" md="6" sm="10" xs="10">
            <Row>
              <Col className="field" xl="6" lg="6" md="6" sm="10" xs="10">
                <TextField
                  id="filled-number"
                  label="Taille"
                  type="number"
                  placeholder="cm"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  onChange={(e) => setCm(e.target.value)}
                />
              </Col>
              <Col className="field" xl="6" lg="6" md="6" sm="10" xs="10">
                <TextField
                  id="filled-number"
                  label="Poids"
                  type="number"
                  placeholder="kg"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  onChange={(e) => setKg(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="calculateBtn">
              <Button
                onClick={calculate}
                type="submit"
              >
                Calculer
                </Button>
            </Row>
            <Row className="calculateBtn">
              Votre indice de masse corporel est de :
              <br />
              {result} kg/&#x33a1;
            </Row>
            <Row className="calculateBtn">
              {interpretation}
            </Row>

          </Col>
          <Col xl="3" lg="3" md="3" sm="1" xs="1" />
        </Row>
      </Container>
    </div>
  );
};

export default ImcPage;