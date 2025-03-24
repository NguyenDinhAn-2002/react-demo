import { Menu, MenuItem } from "@mui/material";

interface MenuItemType {
	label: string;
	onClick: () => void;
}

interface CustomMenuProps {
	anchorEl: HTMLElement | null;
	open: boolean;
	onClose: () => void;
	items: MenuItemType[];
}

const CustomMenu = ({ anchorEl, open, onClose, items }: CustomMenuProps) => {
	return (
		<Menu anchorEl={anchorEl} open={open} onClose={onClose}>
			{items.map((item, index) => (
				<MenuItem key={index} onClick={item.onClick}>
					{item.label}
				</MenuItem>
			))}
		</Menu>
	);
};

export default CustomMenu;
