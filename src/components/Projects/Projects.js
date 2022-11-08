import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Home Automation using IOT"
              description="A step towards Home Automation using IOT Abstract: The aim of this paper is to develop home automation system based on IOT using Wi-Fi based microcontroller. As scope of technology is widening every day, we are making our tech advance in mobile, robotics, Machine Learning, then why an exception for our home."
              ghLink="https://github.com/prasathkrishna/IOT-Home-Automation-Using-Flask"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Intelligence ToolKit"
              description="Cyber threat intelligence is a maturing market, with nearly half of the world’s enterprises having a formal team dedicated to this function. According to the 2021 SANS Cyber Threat Intelligence (CTI) Survey, 44.4% have a formal,dedicated team, and another 13.8% have a single dedicated cyber threat intelligence professional."
              ghLink="https://github.com/prasathkrishna/Intelligence-Toolkit"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text to Speech Conventer using Amazon Polly"
              description="Amazon Polly converts input text into life-like speech. You call one of the speech synthesis methods, provide the text that you want to synthesize, choose one of the Neural Text-to-Speech (NTTS) or Standard Text-to-Speech (TTS) voices, and specify an audio output format. Amazon Polly then synthesizes the provided text into a high-quality speech audio stream."
              ghLink="https://github.com/prasathkrishna/Amazon-Polly"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Smart Farm Automation using IOT"
              description="This smart farming project is in trending nowadays because it can reduce the manpower in farming and secondly it is an automatic system so you don't need to interfere in it. So if you also want to make such a system for yourself then follow the given instructions carefully. This IoT farming project will send all the data to the server. We are using the Thingspeak server for receiving and collecting the data that is collected by the different sensors. "
              ghLink="https://github.com/IBM-EPBL/IBM-Project-1687-1658409883"
      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
