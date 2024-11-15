"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ItemsList from "@/components/Form/ItemsList";
import { createNewInvoice } from "@/lib/actions";
import { generateInvoiceNumber } from "@/lib/helper";
import { InvoiceDetails } from "@/lib/types";

interface InvoiceFormProps {
	invoiceData?: InvoiceDetails;
}

export default function InvoiceForm({ invoiceData }: InvoiceFormProps) {
	const [formSubmitStatus, setFormSubmitStatus] = useState("idle");
	const [invoiceFormData, setInvoiceFormData] = useState(
		invoiceData || {
			paymentDue: "",
			description: "",
			paymentTerms: 0,
			clientEmail: "",
			clientName: "",
			status: "",
			senderAddress: {
				street: "",
				city: "",
				postCode: "",
				country: "",
			},
			clientAddress: {
				street: "",
				city: "",
				postCode: "",
				country: "",
			},
			items: [
				{
					name: "",
					price: 0,
					quantity: 0,
					total: 0,
				},
				{
					name: "",
					price: 0,
					quantity: 0,
					total: 0,
				},
			],
			total: 0,
		},
	);

	function updateFormStateValues(path: string, value: string) {
		const keys = path.split(".");
		setInvoiceFormData((prevState) => {
			let newState = { ...prevState };
			let current = newState;

			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];

				if (i === keys.length - 1) {
					current[key] = value;
				} else {
					if (!current[key]) {
						current[key] = {};
					}
					current = current[key];
				}
			}

			return newState;
		});
	}

	function handleInputChange(
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
	) {
		const { name, value } = e.target;
		updateFormStateValues(name, value);
	}

	// updates the itemslist
	function handleItemsListChange(updatedItems: string) {
		updateFormStateValues("items", updatedItems);
	}

	// form submission
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// to avoid multiple clicks/submissions
		if (formSubmitStatus === "submitting") return;

		// generate an approprite (random) invoice number/id if it doesn't exist
		const invoiceId = invoiceFormData.id || generateInvoiceNumber();

		// grand total of all the items
		const invoiceFinalTotal = invoiceFormData.items.reduce((acc, item) => {
			return acc + item.total;
		}, 0);

		const newInvoiceData = {
			...invoiceFormData,
			id: invoiceId,
			status: "pending",
			total: invoiceFinalTotal,
		};

		const submittedInvoice = await createNewInvoice(newInvoiceData);
		if (submittedInvoice?.message === "success") {
			setFormSubmitStatus("idle");
		}
	}

	return (
		<form
			className="flex flex-col  gap-12"
			onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
		>
			{/* Bill from */}
			<fieldset className="flex flex-col gap-6">
				<legend className="text-accent font-semibold text-secondary_text">
					Bill From
				</legend>
				<div className="input-label-group">
					<label htmlFor="street-address" className="form_label_basic">
						Street Address
					</label>
					<input
						type="text"
						id="street-address"
						name="senderAddress.street"
						className="font-bold"
						value={invoiceFormData.senderAddress.street}
						onChange={handleInputChange}
					/>
				</div>
				<div className="flex flex-row flex-wrap justify-between gap-3 items-center">
					<div className="input-label-group w-auto flex-1 md:w-1/3">
						<label htmlFor="city" className="form_label_basic">
							City
						</label>
						<input
							type="text"
							id="city"
							name="senderAddress.city"
							value={invoiceFormData.senderAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-label-group w-auto flex-1 md:w-1/3">
						<label htmlFor="post-code" className="form_label_basic">
							Post Code
						</label>
						<input
							type="text"
							id="post-code"
							name="senderAddress.postCode"
							value={invoiceFormData.senderAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-label-group w-full md:w-1/3">
						<label htmlFor="country" className="form_label_basic">
							Country
						</label>
						<input
							type="text"
							id="country"
							name="senderAddress.country"
							value={invoiceFormData.senderAddress.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</fieldset>

			{/* Bill To */}
			<fieldset className="flex flex-col gap-6">
				<legend className="text-accent font-semibold text-secondary_text">
					Bill To
				</legend>
				<div className="input-label-group">
					<label htmlFor="client-name" className="form_label_basic">
						Client&apos;s Name
					</label>
					<input
						type="text"
						id="client-name"
						name="clientName"
						value={invoiceFormData.clientName}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-label-group">
					<label htmlFor="client-email" className="form_label_basic">
						Client&apos;s Email
					</label>
					<input
						type="email"
						id="client-email"
						name="clientEmail"
						value={invoiceFormData.clientEmail}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-label-group">
					<label htmlFor="street-name" className="form_label_basic">
						Street Name
					</label>
					<input
						type="text"
						id="street-name"
						name="clientAddress.street"
						value={invoiceFormData.clientAddress.street}
						onChange={handleInputChange}
					/>
				</div>
				<div className="flex flex-row flex-wrap justify-between gap-3 items-center">
					<div className="input-label-group w-auto flex-1 md:w-1/3">
						<label htmlFor="client-city" className="form_label_basic">
							City
						</label>
						<input
							type="text"
							id="client-city"
							name="clientAddress.city"
							value={invoiceFormData.clientAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-label-group w-auto flex-1 md:w-1/3">
						<label htmlFor="client-post-code" className="form_label_basic">
							Post Code
						</label>
						<input
							type="text"
							id="client-post-code"
							name="clientAddress.postCode"
							value={invoiceFormData.clientAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-label-group w-full md:w-1/3">
						<label htmlFor="client-country" className="form_label_basic">
							Country
						</label>
						<input
							type="text"
							id="client-country"
							name="clientAddress.country"
							value={invoiceFormData.clientAddress.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-3 items-center">
					<div className="input-label-group w-full">
						<label htmlFor="invoice-date" className="form_label_basic">
							Invoice Date
						</label>
						<input
							type="date"
							id="invoice-date"
							name="paymentDue"
							value={invoiceFormData.paymentDue}
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-label-group w-full">
						<label htmlFor="payment-terms" className="form_label_basic">
							Payment Terms
						</label>
						<select
							id="payment-terms"
							name="paymentTerms"
							className="p-3 rounded-lg border-2 border-background-neutral_alt"
							value={invoiceFormData.paymentTerms}
							onChange={handleInputChange}
						>
							<option value="1day">Next 1 Day</option>
							<option value="7days">Next 7 Days</option>
							<option value="14days">Next 14 Days</option>
							<option value="30days">Next 30 Days</option>
						</select>
					</div>
				</div>
				<div className="input-label-group">
					<label htmlFor="project-description" className="form_label_basic">
						Project Description
					</label>
					<input
						type="text"
						id="project-description"
						name="description"
						value={invoiceFormData.description}
						onChange={handleInputChange}
					/>
				</div>
			</fieldset>

			{/* Item List */}

			<ItemsList
				invoiceItemData={invoiceFormData.items}
				onItemsListChange={handleItemsListChange}
			/>
			<div className="flex justify-end gap-4">
				{/* <button */}
				{/* 	className="btn-basic text-text-tertiary bg-background-secondary cursor-not-allowed" */}
				{/* 	type="button" */}
				{/* 	disabled */}
				{/* > */}
				{/* 	Discard */}
				{/* </button> */}
				<button
					className="btn-basic text-text-tertiary bg-background-secondary cursor-not-allowed"
					type="button"
					disabled
				>
					Save as Draft
				</button>
				<button
					className="btn-basic bg-accent text-background-secondary hover:opacity-70 hover:transition-opacity"
					type="submit"
				>
					Save Changes
				</button>
			</div>
		</form>
	);
}
