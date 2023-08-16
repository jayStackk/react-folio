import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import ResumePic from '../assets/Codestackjmag.png';
import Particle from "../components/skillset/Particle";




const Resume = () => {
    const imageRef = useRef(null);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = ResumePic;
        link.download = "ResumeImage.png";
        link.click();
      };

  return (

    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
           onClick={handleDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download Image
          </Button>
        </Row>

        <Row className="resume">
          <img
            // ref={imageRef}
            src={ResumePic}
            style={{
              height: '450px',
              width:'332px' ,
               
              borderStyle : 'solid', 
              borderWidth :"4px",
              
            }}
            
            alt="Resume Image"
          />
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>

        </Row> */}
      </Container>
      </div>
   
  );
};

export default Resume;