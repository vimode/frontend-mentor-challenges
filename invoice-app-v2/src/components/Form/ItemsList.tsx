"use client";
import { Item } from "@/lib/types";
import { useEffect, useState } from "react";

interface ItemsListProps {
	invoiceItemData: Item[];
	onItemsListChange: (items: string | Item[]) => void;
}

export default function ItemsList({
	invoiceItemData,
	onItemsListChange,
}: ItemsListProps) {
	const [itemsList, setItemsList] = useState<Item[]>(invoiceItemData);

	function handleInputChange(
		index: number,
		field: keyof Item,
		value: string | number,
	) {
		const newItems = [...itemsList];
		newItems[index] = { ...newItems[index], [field]: value };
		if (newItems[index].quantity && newItems[index].price) {
			newItems[index].total = newItems[index].quantity * newItems[index].price;
		} else {
			newItems[index].total = 0;
		}
		setItemsList(newItems);
	}

	function handleAddItem() {
		setItemsList([...itemsList, { name: "", quantity: 0, price: 0, total: 0 }]);
	}

	useEffect(() => {
		onItemsListChange(itemsList);
	}, [itemsList]);

	return (
		<fieldset className="flex flex-col gap-6">
			<legend className="text-accent font-semibold text-secondary_text">
				Item List
			</legend>
			<div className="table">
				<div className="table-header-group">
					<div className="table-row flex-row">
						<div className="table-cell form_label_basic font-normal">
							Item Name
						</div>
						<div className="table-cell form_label_basic font-normal">Qty.</div>
						<div className="table-cell form_label_basic font-normal">Price</div>
						<div className="table-cell form_label_basic font-normal">Total</div>
						<div className="table-cell form_label_basic font-normal"></div>
					</div>
				</div>
				<div className="table-row-group">
					{itemsList.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-cell">
								<input
									type="text"
									name={`item.name${index}`}
									value={item.name}
									onChange={(e) =>
										handleInputChange(index, "name", e.target.value)
									}
								/>
							</div>
							<div className="table-cell">
								<input
									type="number"
									name={`item.quantity${index}`}
									value={item.quantity}
									onChange={(e) =>
										handleInputChange(
											index,
											"quantity",
											parseInt(e.target.value),
										)
									}
								/>
							</div>
							<div className="table-cell">
								<input
									type="number"
									step="1.0"
									name={`item.price${index}`}
									value={item.price}
									onChange={(e) =>
										handleInputChange(
											index,
											"price",
											parseFloat(e.target.value),
										)
									}
								/>
							</div>
							<div className="table-cell">{item.total.toFixed(2)}</div>
							<div className="table-cell">
								<button type="button" disabled>
									DEL
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<button
				className="btn-basic text-text-tertiary bg-background-secondary w-full hover:bg-background-neutral_alt hover:transition-colors"
				type="button"
				onClick={handleAddItem}
			>
				+ Add New Item
			</button>
		</fieldset>
	);
}
