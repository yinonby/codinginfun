
import Box from '@mui/material/Box';

export default function Header() {
    const boxStyle = {
        height: "100px",
        display: "flex",
        justifyContent: "center",
    }

    return (
        <Box style={boxStyle}>
                <img
                    style={{height: "100px", objectFit: "contain",
                        maxWidth: "50%"}}
                    srcSet="/img/logo-color-no-circle.png"
                    src="/img/logo-color-no-circle.png"
                    alt="logo"
                    loading="lazy"
                />
        </Box>
    );
}
