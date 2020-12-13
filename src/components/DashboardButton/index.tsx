import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {
	Close,
	Container,
	Group,
	GroupWrapper,
	Icon,
	Inner,
	Text,
} from './styles/dashboardButton';

export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DashboardButtonProps extends ButtonProps {
	id?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	color?: 'success' | 'info' | 'warning' | 'error';
}

export interface TextProps {
	color?: 'success' | 'info' | 'warning' | 'error';
}

export interface GroupProps {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export interface DashboardButtonComposition {
	Close: React.FC<ButtonProps>;
	Group: React.FC<GroupProps>;
	GroupWrapper: React.FC;
	Icon: React.FC;
	Text: React.FC<TextProps>;
}

library.add(far);

const DashboardButton: React.SFC<DashboardButtonProps> &
	DashboardButtonComposition = ({
	direction,
	onClick,
	id,
	children,
	color,
	...restProps
}) => {
	return (
		<Container data-id={id} onClick={onClick} {...restProps}>
			<Inner color={color} direction={direction}>
				{children}
			</Inner>
		</Container>
	);
};

export const DashboardButtonIcon: React.FC = ({ children, ...restProps }) => (
	<Icon {...restProps}>{children}</Icon>
);

export const DashboardButtonClose: React.FC<ButtonProps> = ({
	onClick,
	children,
	...restProps
}) => (
	<Close onClick={onClick} {...restProps}>
		{children}
	</Close>
);

export const DashboardButtonGroup: React.FC<GroupProps> = ({
	direction,
	children,
	...restProps
}) => (
	<Group direction={direction} {...restProps}>
		{children}
	</Group>
);

export const DashboardButtonText: React.FC = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

export const DashboardButtonGroupWrapper: React.FC = ({
	children,
	...restProps
}) => <GroupWrapper {...restProps}>{children}</GroupWrapper>;

DashboardButton.Close = DashboardButtonClose;
DashboardButton.Group = DashboardButtonGroup;
DashboardButton.Icon = DashboardButtonIcon;
DashboardButton.Text = DashboardButtonText;
DashboardButton.GroupWrapper = DashboardButtonGroupWrapper;

export default DashboardButton;
