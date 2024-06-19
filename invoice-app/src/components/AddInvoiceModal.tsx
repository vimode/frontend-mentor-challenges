import { useEffect } from "react";
import ReactPortal from "./ReactPortal";

function AddInvoiceModal({
	children,
	isOpen,
	handleClose,
}: {
	children: React.ReactNode;
	isOpen: boolean;
	handleClose: () => void;
}) {
	// handle escape key to close
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) =>
			e.key === "Escape" ? handleClose() : null;
		document.body.addEventListener("keydown", closeOnEscapeKey);

		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	//  disable main page scroll
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<div className="modal">
				<button onClick={handleClose} className="close-btn">
					Close
				</button>
				<div className="modal-content">{children}</div>
			</div>
		</ReactPortal>
	);
}

export default AddInvoiceModal;
