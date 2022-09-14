import { Row } from '../layout/grid/grid.component';
import {
    HeadingSecondary,
    HeadingTertiary
} from '../layout/heading/headings.component';

const Stories = () => {
    return (
        <section className='section-stories'>
            <div className='u-center-text u-margin-bottom-big'>
                <HeadingSecondary>
                    We make people genuinely happy
                </HeadingSecondary>
            </div>

            <Row>
                <div className='story'>
                    <figure className='story__shape'>
                        <img
                            src={require('../../assets/img/nat-8.jpg')}
                            alt='person on a tour'
                            className='story__img'
                        />
                        <figcaption className='story__caption'>
                            Mary Smith
                        </figcaption>
                    </figure>

                    <div className='story__text'>
                        <HeadingTertiary className={'u-margin-bottom-small'}>
                            I had the best week ever with my family
                        </HeadingTertiary>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Totam commodi debitis quaerat unde sequi
                            nihil. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Laboriosam corrupti quisquam unde
                            dicta ex voluptate! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Adipisci, harum.
                        </p>
                    </div>
                </div>
            </Row>
        </section>
    );
};

export default Stories;
