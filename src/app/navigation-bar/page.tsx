import { Box, IconButton, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

const NavigationBarPage = () => {
	return (
		<Box
			sx={{
				width: { xs: '100%', sm: 250 },
				backgroundColor: 'lightgrey',
				height: { xs: 'auto', sm: '100dvh' },
				display: 'flex',
				flexDirection: { xs: 'row', sm: 'column' },
				position: 'fixed',
				top: { xs: 'auto', sm: 0 },
				left: 0,
				bottom: { xs: 0, sm: 'auto' },
				justifyContent: 'space-between',
			}}
			role="presentation"
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'row', sm: 'column' },
					height: { xs: '60px', sm: '100%' },
					width: '100%',
					justifyContent: { xs: 'space-between', sm: 'start' },
				}}
			>
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<IconButton>
						<InboxIcon />
					</IconButton>
					<Typography
						variant="body2"
						sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
					>
						PC Only
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<IconButton>
						<MailIcon />
					</IconButton>
					<Typography
						variant="body2"
						sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
					>
						Starred
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<IconButton>
						<AccessAlarmIcon />
					</IconButton>
					<Typography
						variant="body2"
						sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
					>
						Send email
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<IconButton>
						<AccessibilityIcon />
					</IconButton>
					<Typography
						variant="body2"
						sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
					>
						Starred
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<IconButton>
						<AddToQueueIcon />
					</IconButton>
					<Typography
						variant="body2"
						sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
					>
						Send email
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default NavigationBarPage;
