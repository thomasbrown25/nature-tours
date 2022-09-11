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
                    <div className='card'>
                        <div className='card__side card__side--front'>
                            FRONT
                        </div>
                        <div className='card__side card__side--back card__side--back-1'>
                            BACK
                        </div>
                    </div>
                </Col>
                <Col size={'1-of-3'}></Col>
                <Col size={'1-of-3'}></Col>
            </Row>
        </section>
    );
};

export default Tours;
