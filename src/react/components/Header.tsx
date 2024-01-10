
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const HeaderContainer = styled('div')(({ theme }) => ({
  margin: "8px",
  padding: "0 8px",
  [theme.breakpoints.down('sm')]: {
    height: "48px",
  },
  [theme.breakpoints.up('sm')]: {
    height: "48px",
  },
}));

export const Content = styled('div')(({ theme }) => ({
  padding: "0 8px",
  [theme.breakpoints.down('sm')]: {
    height: "calc(100vh - 48px - 16px)",
  },
  [theme.breakpoints.up('sm')]: {
    height: "calc(100vh - 48px - 16px)",
  },
}));

export default function Header() {
  const boxStyle = {
    display: "flex",
    height: "100%",
    justifyContent: "flex-start",
  }

  return (
    <HeaderContainer>
      <Box style={boxStyle}>
        <Link to="/o/exercises/ts">
          <img
            style={{
              height: "48px", objectFit: "contain",
              maxWidth: "48px"
            }}
            srcSet="/img/new-logo-no-background.png"
            src="/img/new-logo-no-background.png"
            alt="logo"
            loading="lazy"
          />
        </Link>
        <Box sx={{flex: 1}}/>
        <Link to="https://www.instagram.com/codinginfun/" target="_blank">
          <img
            style={{
              height: "48px", objectFit: "contain",
              maxWidth: "48px"
            }}
            srcSet="/img/instagram-icon.png"
            src="/img/instagram-icon.png"
            alt="instagram"
            loading="lazy"
          />
        </Link>
      </Box>
    </HeaderContainer>
  );
}
