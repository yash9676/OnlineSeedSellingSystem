import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Footer.css";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
	
} from "./FooterStyles";

const Footer = () => {
	return (

		<Box>
			<footer>
			<div id ="footer"><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" ></link></div>
			<Container>

				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Mobiles</FooterLink>
						<FooterLink href="#">Pre-Ordering</FooterLink>
						<FooterLink href="#">Delivery</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							<i className="fa fa-phone-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								+91 82372-53188,
							</span>

						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-phone-square"> <b>Hotline:</b>
							</i><br></br>
							<span style={{ marginLeft: "10px" }}>

								+91 97734-66928,
							</span>
						</FooterLink>

						<FooterLink href="#">
							<i className="fa fa-envelope"> <b><ore>  Email us:</ore></b>
							</i>
							<span style={{ marginLeft: "10px" }}>
								seedshop171@gmail.com
							</span>
						</FooterLink>
						{/* <FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}
					</Column>
					<Column>

						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fa fa-linkedin-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								LinkedIn
							</span>


						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-facebook-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Facebook
							</span>


						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-instagram">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Instagram
							</span>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-twitter">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Twitter
							</span>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-youtube">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Youtube
							</span>
						</FooterLink>
					</Column>
				</Row>
				<div className="footer-copyright text-center py-3 " >
					<Card.Header className="mt-4">
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="#"> Kanad Virpe & yash Kadwe (Pg-DAC IACSD Sept-2021)</a>
					</Card.Header>
				</div>
			</Container>
			</footer>
		</Box>
	);
};
export default Footer;