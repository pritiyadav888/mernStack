import React, {useState, useRef} from 'react';
import {Container,Button, Row, Col, Card} from "react-bootstrap";
import QrReader from 'react-qr-reader';
import {Link} from 'react-router-dom';


const QRScanPage = () => {
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const qrRef = useRef(null);



  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
      if (result) {
          setScanResultFile(result);
      }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
   };

   
  
   return (
    <Container >
          <Card>
              <h2 class="bg-info text-center">Scan Item QR Code</h2>
              <Card.Body>
              <Row>
              <Col xs={6} md={4}>
                <Button variant="primary" onClick={onScanFile}>Scan Qr Code</Button>
                </Col>

                <Col xs={6} md={4}>
                <h3>Qr Code Scan by Web Cam</h3>

                </Col>
                 </Row>
                 <Row>
                 <Col xs={6} md={4}>
                 <QrReader
                          ref={qrRef}
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                       
                </Col>

                <Col xs={6} md={4}>
                <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />


                </Col>
                 
                       
                        
                 </Row>
                 <Row>
                 <Col xs={6} md={4}>
                    
                    <h3>Scanned Code: <Link to={scanResultFile}>{scanResultFile} </Link></h3>
                    </Col>
                    <Col xs={6} md={4}>
                    <h3>Scanned By WebCam Code: <Link to={scanResultFile}>{scanResultWebCam} </Link> {scanResultWebCam}</h3>
                    </Col>

                

                 
              

                 </Row>
                        
                    
              </Card.Body>
          </Card>
    </Container>
  );
}




export default QRScanPage;


