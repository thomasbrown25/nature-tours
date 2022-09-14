const Card = ({ __cardId, heading, cardDetails, price }) => {
    return (
        <div className='card'>
            <div className='card__side card__side--front'>
                <div className={`card__picture card__picture--${__cardId}`}>
                    &nbsp;
                </div>
                <h4 className='card__heading'>
                    <span
                        className={`card__heading-span card__heading-span--${__cardId}`}
                    >
                        {heading}
                    </span>
                </h4>
                <div className='card__details'>
                    <ul>
                        {cardDetails.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className={`card__side card__side--back card__side--back-${__cardId}`}
            >
                <div className='card__cta'>
                    <div className='card__price-box'>
                        <p className='card__price-only'>Only</p>
                        <p className='card__price-value'>{price}</p>
                    </div>
                    <a href='/' className='btn btn--white'>
                        Book now!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
