import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  NewsLetter,
  Footer,
} from '../components';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
