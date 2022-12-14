import Header from '../../components/layout/header/header.component';
import About from '../../components/about/about.component';
import Layout from '../layout/layout.component';
import Features from '../../components/features/features.component';
import Tours from '../../components/tours/tours.component';
import Stories from '../../components/stories/stories.component';

const Home = () => {
    return (
        <Layout>
            <Header />
            <About />
            <Features />
            <Tours />
            <Stories />
        </Layout>
    );
};

export default Home;
