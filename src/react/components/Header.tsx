
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled('div')(({ theme }) => ({
  margin: "8px",
  padding: "0 8px",
  [theme.breakpoints.down('sm')]: {
    height: "50px",
  },
  [theme.breakpoints.up('sm')]: {
    height: "80px",
  },
}));

export const Content = styled('div')(({ theme }) => ({
    padding: "0 8px",
    [theme.breakpoints.down('sm')]: {
      height: "calc(100vh - 50px - 16px)",
    },
    [theme.breakpoints.up('sm')]: {
      height: "calc(100vh - 80px - 16px)",
    },
  }));

export default function Header() {
    const boxStyle = {
        display: "flex",
        height: "100%",
        justifyContent: "center",
    }

    return (
        <HeaderContainer>
            <Box style={boxStyle}>
                <img
                    style={{height: "100%", objectFit: "contain",
                        maxWidth: "50%"}}
                    srcSet="/img/logo-color-no-circle.png"
                    src="/img/logo-color-no-circle.png"
                    alt="logo"
                    loading="lazy"
                />
            </Box>
        </HeaderContainer>
    );
}
