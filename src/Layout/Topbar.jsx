import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, designTokens } from "../theme";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Topbar() {
    const theme = useTheme();
    const colors = designTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="end" p="2px 10px 2px 0px">
            {/* Icons */}
            <Box display="flex" gap={2}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ?
                        (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                </IconButton>
                <IconButton >
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar