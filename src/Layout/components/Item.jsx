import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { NavLink, useLocation } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import { designTokens } from '../../theme'


const Item = ({ title, to, icon, selected, setSelected, open, active, currentLocation }) => {
    const theme = useTheme()
    const colors = designTokens(theme.palette.mode)
    const location = currentLocation !== "" ? currentLocation : "/"

    return (
        <ListItem disablePadding sx={{
            display: 'block',
        }}>
            <NavLink
                to={to}
                style={() => ({
                    color: location === to ? colors.redAccent[500] : colors.grey[100],
                    textDecoration: 'none',
                    // ':hover': {
                    //     color: colors.redAccent[500]
                    // }
                })}
            >
                <ListItemButton
                    disableRipple
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                            color: colors.redAccent[500]
                        }
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: location === to ? colors.redAccent[500] : colors.grey[100],
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </NavLink>
        </ListItem>
    )
}

export default Item