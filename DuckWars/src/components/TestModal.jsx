import React from 'react';
import "../CSS/Modal.css";
import TableauDeChasse from "./TableauDeChasse";
import Armory from "./Armory";
import HotWookie from "./HotWookie";

const TestModal = ({ displayModal, closeModal, contentId }) => {
    const handleCloseModal = () => {
        closeModal();
    };

    const renderContent = () => {
        switch (contentId) {
            case 'wanted':
                return <TableauDeChasse />;
            case 'ventearmes':
                return <Armory />;
            case 'wookiesexuel':
                return <HotWookie />;
            default:
                return null;
        }
    };

    return (
        <div className="modal" onClick={handleCloseModal} style={{ display: displayModal ? "block" : "none" }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={handleCloseModal}>&times;</span>
                {renderContent()}
            </div>
        </div>
    );
};

export default TestModal;

