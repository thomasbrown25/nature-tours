import { Col, Row } from '../layout/grid/grid.component';
import {
    HeadingSecondary,
    HeadingTertiary
} from '../layout/heading/headings.component';

const About = () => {
    return (
        <main>
            <section className='section-about'>
                <div className='u-center-text u-margin-bottom-big u-margin-top-big'>
                    <HeadingSecondary>
                        Exciting tours for adventurous people
                    </HeadingSecondary>
                </div>

                <Row>
                    <Col size={'1-of-2'}>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            You're going to fall in love with nature
                        </HeadingTertiary>
                        <p className='paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum repellat fuga commodi dignissimos
                            corrupti quasi accusamus neque quam? Dolore
                            incidunt, deleniti repellendus iusto aspernatur
                            commodi tenetur labore dolor porro accusantium.
                        </p>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            Live adventures like you never have before
                        </HeadingTertiary>
                        <p className='paragraph'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet debitis quisquam quae illo!
                            Repudiandae sint unde possimus inventore.
                        </p>

                        <a href='/' className='btn-text'>
                            Learn more &rarr;
                        </a>
                    </Col>
                    <Col size={'1-of-2'}>
                        <div className='composition'>
                            <img
                                src={require('../../assets/img/nat-1-large.jpg')}
                                alt='nat-1'
                                className='composition__photo composition__photo--p1'
                            />
                            <img
                                src={require('../../assets/img/nat-2-large.jpg')}
                                alt='nat-2'
                                className='composition__photo composition__photo--p2'
                            />
                            <img
                                src={require('../../assets/img/nat-3-large.jpg')}
                                alt='nat-3'
                                className='composition__photo composition__photo--p3'
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default About;
