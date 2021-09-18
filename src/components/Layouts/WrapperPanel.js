const WrapperPanel = ({ children }) => {
    return (
        <div className="p-2 sm:p-5 bg-white bg-opacity-75 rounded-md shadow dark:bg-opacity-20 dark:bg-black w-full">
            {children}
        </div>
    );
}

export default WrapperPanel;