
import Box from '@mui/material/Box';

export default function Header() {
    const boxStyle = {
        height: "100px",
        display: "flex",
        justifyContent: "center",
    }
    const imgStyle = {
        height: "100px",
    }

    return (
        <Box style={boxStyle}>
            <img
                style={imgStyle}
                srcSet="/img/logo-color-no-circle.png"
                src="/img/logo-color-no-circle.png"
                alt="logo"
                loading="lazy"
            />
        </Box>
    );
}
