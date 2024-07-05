import NewInvoiceForm from "./NewInvoiceForm.tsx";

export default function ModalDialog() {
	return (
		<dialog id="newInvoiceDialog" ref={dialogRef}>
			<NewInvoiceForm handleClose={closeDialog} />
		</dialog>
	);
}
