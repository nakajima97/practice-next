'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { autocompleteClasses } from '@mui/material';

const NavigationBarPage = () => {
	return (
		<Box
			sx={{
				width: {xs: '100dvh', sm: 250},
				backgroundColor: 'lightgrey',
				height: {xs: '60px', sm: '100dvh'},
				display: 'flex',
				position: 'fixed',
				top: {xs: 'auto', sm: 0},
				left: 0,
				bottom: {xs: 0, sm: 'auto'},
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
			role="presentation"
		>
			<List>
        <ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='PC Only' />
						</ListItemButton>
					</ListItem>
          <ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary='Starred' />
						</ListItemButton>
					</ListItem>
          <ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<AccessAlarmIcon />
							</ListItemIcon>
							<ListItemText primary='Send email' />
						</ListItemButton>
					</ListItem>
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default NavigationBarPage;
