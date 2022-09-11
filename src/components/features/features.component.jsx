import { Col, Row } from '../layout/grid/grid.component';
import { HeadingTertiary } from '../layout/heading/headings.component';

const Features = () => {
    return (
        <section className='section-features'>
            <Row>
                <Col size={'1-of-4'}>
                    <div className='feature-box'>
                        <i class='feature-box__icon icon-basic-world'></i>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            Explore the world
                        </HeadingTertiary>
                        <p className='feature-box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim quod odit voluptas delectus nesciunt
                            adipisci.
                        </p>
                    </div>
                </Col>

                <Col size={'1-of-4'}>
                    <div className='feature-box'>
                        <i class='feature-box__icon icon-basic-compass'></i>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            Meet Nature
                        </HeadingTertiary>
                        <p className='feature-box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim quod odit voluptas delectus nesciunt
                            adipisci.
                        </p>
                    </div>
                </Col>

                <Col size={'1-of-4'}>
                    <div className='feature-box'>
                        <i class='feature-box__icon icon-basic-map'></i>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            Find your way
                        </HeadingTertiary>
                        <p className='feature-box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim quod odit voluptas delectus nesciunt
                            adipisci.
                        </p>
                    </div>
                </Col>

                <Col size={'1-of-4'}>
                    <div className='feature-box'>
                        <i class='feature-box__icon icon-basic-heart'></i>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            Live a healthier life
                        </HeadingTertiary>
                        <p className='feature-box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim quod odit voluptas delectus nesciunt
                            adipisci.
                        </p>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Features;
