export const Row = ({ children }) => {
    return <div className='row'>{children}</div>;
};

export const Col = ({ children, size }) => {
    return <div className={`col-${size}`}>{children}</div>;
};
