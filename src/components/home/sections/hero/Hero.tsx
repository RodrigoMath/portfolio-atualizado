import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import img from '../../../../assets/images/image.png'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import StyledButton from '../../buttons/StyledButton';
import StyledBackGround from '../../styledBackground/StyledBackground';

const Hero = () => {

    const StyledHero = styled('div')(({theme}) => ({
        backgroundColor: theme.palette.primary.main,  
        height:"100vh",
        display: "flex",
        alignItems: "center",
    }));

    const StyledImg = styled('img')(({theme}) => ({
      width: "100%",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.primary.contrastText}`,
    }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container display="flex" justifyContent="center" spacing={3}>
              <Grid item size={4}>
                <StyledImg src={img} style={{ position: "relative", zIndex: 2 }}></StyledImg>
              </Grid>
              <Grid item size={8}  container display="flex" justifyContent="center" spacing={2} pt={3}>
                <Typography color='primary.contrastText' variant='h1' textAlign={'center'}>Rodrigo Raiter Mathias</Typography>
                <Typography color='prprimary.contrastText' variant='h2'textAlign={'center'}>Software engineer</Typography>
                <StyledButton>
                  <FileDownloadIcon/>
                    <Typography>
                      download CV
                    </Typography>
                  
                </StyledButton>
                <StyledButton>
                  <FileDownloadIcon/>
                  <Typography>
                      contato
                  </Typography>
                </StyledButton>
              </Grid>
           </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
