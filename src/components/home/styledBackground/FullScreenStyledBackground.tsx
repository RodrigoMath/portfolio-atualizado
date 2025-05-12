import { Box } from '@mui/material';
import StyledBackGround from '../styledBackground/StyledBackground';

const FullScreenBackground = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={-1} // Para garantir que fique atrás de todo o conteúdo
    >
      <StyledBackGround />
    </Box>
  );
};

export default FullScreenBackground;
