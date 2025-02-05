import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medical from "../../Assets/Projects/medical.png";
import train from "../../Assets/Projects/train.png";
import shopify from "../../Assets/Projects/shopify.png";
import flight from "../../Assets/Projects/flight.png";

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
              imgPath={medical}
              isBlog={false}
              title="Medical Billing & Finances"
              description="A project with stack of Azure Data Factory, Azure Databricks and Microsoft PowerBI. The project is responsible for keeping tracking of all the medical expenses, items purchased/sold and billing. I not only created but tested, deployed and monitored the whole system architecture."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Shipping Management"
              description="Project for a large logistics company to track their shipping statuses, history and customers with repeat businesses. Project used Microsoft Fabric as a complete end-to-end solution, with data coming from multiple source a single data warehouse was created which combined all the datasets, making analysis easier. PowerBI was used to accomodate end-user needs."
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train}
              isBlog={false}
              title="IoT Railway project"
              description="Commercial project tracking train location/position and events realtime. Built on core python and automated through Apache Airflow and deployed on cloud services. PowerBI used as main visualization and tracking tool."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Tracking Project"
              description="Reports built on realtime database to track the status and procedure of tracking and managing farm including plant growth, fertilizer content and pestisides."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Shopify Project"
              description="Built with the power of Python and automated through Apache Airflow. This beast of a project was responsible for pulling data through ShopifyAPI and provide insights in a form of report in PowerBI, successfully providing user with the knowledge of their business operations, weak areas and oppurtnities."
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tax One Time"
              description="A cross-platform app built to facilitaty its users with tax information and an AI-driven assistant to help users through each step making sure that the customer gets what they are looking for."
              />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
