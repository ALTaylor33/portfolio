import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Poke`Dex',
//       description: 'A complete Poke`Dexwebsite, where we have combined PokeAPI and Pokemon TCG API to bring you a comprehensive database of all 1008 Pokemon from all 9 generations! ',
//       liveLink: 'https://pokedexportal.com/',
//       githubLink: 'https://github.com/that-devguy/Pokedex-Web-Application',
//     },
//     {
//       title: 'Project 2',
//       description: 'A daily planner for your day to day tasks',
//       liveLink: 'https://altaylor33.github.io/plannerOftheDay/',
//       githubLink: 'https://github.com/ALTaylor33/plannerOftheDay',
//     },
//     // Add more project objects as needed
//   ];

//   return (
//     <section>
//       <h2>Projects</h2>
//       <div>
//         {projects.map((project, index) => (
//           <div key={index}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>
//               <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
//                 View Live
//               </a>{' '}
//               |{' '}
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                 GitHub Repository
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    <Col className="mb-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="assets/img/1686155955023.jpg" />
      <Card.Body>
        <Card.Title>pokedex Portal</Card.Title>
        <Card.Text>
        Welcome to our Pokedex website, where we've combined PokeAPI and Pokemon TCG API to bring you a 
        comprehensive database of all 1008 Pokemon from all 9 generations! Our website utilizes the powerful Tailwind CSS 
        framework to deliver an elegant and user-friendly design that makes it easy for users to search and view Pokemon information, 
        including their stats, evolutions, and even trading cards.
        </Card.Text>
        <NavLink href="https://pokedexportal.com/" variant="primary">live link</NavLink>
        <NavLink href="https://pokedexportal.com/" variant="primary">Github</NavLink>
      </Card.Body>
    </Card>
    </Col> 
    </Row>
    </Container>
  );
}

export default Projects;

