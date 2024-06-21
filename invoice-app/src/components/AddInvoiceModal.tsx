import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import styles from "./addinvoice.module.css";

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
			<div className={styles.overlay}></div>
			<div className={styles.modal_wrapper}>
				<div className="modal-content">{children}</div>
			</div>
		</ReactPortal>
	);
}

export default AddInvoiceModal;
