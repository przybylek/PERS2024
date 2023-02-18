import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className="bg-white section p-4 mb-5">
    <a className='target' id='about'/>
    <h2 className="display-4 anchor mb-3">About</h2>
    <p>Recommender Systems are present in our everyday life while we reading news, logging in to social media or buying something in e-shop. Thus, it should not be suprising that this domain is getting more and more attention from researchers from academia as well as from industry practitioners. However, the way in which they look at the same problem differs a lot.</p>
    <p>User Modelling is somehow related to Recommender Systems, as it enables personalization, which is important thing in novel recommendation techniques. Nonetheless, it is a wider topic that concerns also user representation, personalized search, adaptive educational systems or intelligent user interfaces.</p>
    <p>The workshop on Personalization and Recommender Systems (PeRS) was founded in 2022 as a part of the FedCSIS multiconference. In 2023, PeRS has joined ADBIS with the aim to extend the state-of-the-art in User Modelling and Recommender Systems by providing a platform at which industry practitioners and academic researchers can meet and learn from each other.</p>
  </Container>
)

export default About




