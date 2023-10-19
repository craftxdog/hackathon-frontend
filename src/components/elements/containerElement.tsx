interface ContainerElement{
    children: React.ReactNode;
}

const ContainerElement: React.FC<ContainerElement> = ({
    children
}) => {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                {children}
            </div>
        </>
    );
};

export default ContainerElement;