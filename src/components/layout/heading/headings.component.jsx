export const HeadingSecondary = ({ children }) => {
    return <h2 className='heading-secondary'>{children}</h2>;
};

export const HeadingTertiary = ({ children, className }) => {
    return (
        <h3 className={`heading-tertiary ${className ? className : ''}`}>
            {children}
        </h3>
    );
};
