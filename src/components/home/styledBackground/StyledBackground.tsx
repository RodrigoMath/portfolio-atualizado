import { styled } from "@mui/material";

function StyledBackground() {

    const StyledBackground = styled("div")({
        animation: "scroll 100s linear infinite",
        background: `url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"), #111111`,
        color: "#eee",
        height: "100vh",
        minWidth: "360px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
        
        "@keyframes scroll": {
            "100%": {
                backgroundPosition: "0px -400%"
            }
        },
        
        "@media (prefers-reduced-motion)": {
            animation: "scroll 800s linear infinite"
        }
    });
  return (
    <StyledBackground/>
  );
}

export default StyledBackground;