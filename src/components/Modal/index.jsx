
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomModal = (props) => {
	const {
		buttonLabel,
		className,
		toggle,
		modal,
		children, 
		title
	} = props;


	return (
		<div>
			<Modal isOpen={modal} toggle={toggle} className={className} backdrop="static" keyboard={false}>
				<ModalHeader toggle={toggle}>{title}</ModalHeader>
				<ModalBody>
					{children}
				</ModalBody>
			</Modal>
		</div>
	);
}

export default CustomModal;