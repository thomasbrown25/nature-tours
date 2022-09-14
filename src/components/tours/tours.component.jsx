import Card from '../layout/card/card.component';
import { Col, Row } from '../layout/grid/grid.component';
import { HeadingSecondary } from '../layout/heading/headings.component';

const Tours = () => {
    return (
        <section className='section-tours'>
            <div className='u-center-text u-margin-bottom-big'>
                <HeadingSecondary>Most popular tours</HeadingSecondary>
            </div>
            <Row>
                <Col size={'1-of-3'}>
                    <Card
                        __cardId={'1'}
                        heading={'The Sea Explorer'}
                        cardDetails={[
                            '3 day tour',
                            'Up to 30 people',
                            '2 tour guides',
                            'Sleep in cozy hotels',
                            'Difficulty: easy'
                        ]}
                        price={'$297'}
                    />
                </Col>
                <Col size={'1-of-3'}>
                    <Card
                        __cardId={'2'}
                        heading={'The Forest Hiker'}
                        cardDetails={[
                            '7 day tour',
                            'Up to 40 people',
                            '6 tour guides',
                            'Sleep in provided tents',
                            'Difficulty: medium'
                        ]}
                        price={'$497'}
                    />
                </Col>
                <Col size={'1-of-3'}>
                    <Card
                        __cardId={'3'}
                        heading={'The Snow Adventurer'}
                        cardDetails={[
                            '5 day tour',
                            'Up to 15 people',
                            '3 tour guides',
                            'Sleep in provided tents',
                            'Difficulty: hard'
                        ]}
                        price={'$897'}
                    />
                </Col>
            </Row>

            <div className='u-center-text u-margin-top-huge'>
                <a href='/' className='btn btn--green'>
                    Discover all tours
                </a>
            </div>
        </section>
    );
};

export default Tours;
