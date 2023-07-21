import {useState,createContext} from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen);
    };

    const modalValues = {
        isOpen,
        toggleModal,
    };

    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    )
};

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {ModalContext,ModalProvider }
