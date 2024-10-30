import { IconButton, Badge, Box, Typography } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Carrito */}
        <Link to="/cart" style={{ color: "inherit" }}>
          <IconButton color="inherit" sx={{ mx: 1 }}>
            <Badge
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#E4F0CD",
                },
              }}
            >
              <ShoppingCart sx={{ color: "#ECE5D1", fontSize: "30px" }} />
            </Badge>
          </IconButton>
        </Link>

        {/* Ícono de perfil o login */}
        <Box sx={{ textAlign: "center", mx: 1 }}>
          <IconButton color="inherit">
            <AccountCircle sx={{ color: "#ECE5D1", fontSize: "30px", mx: 1 }} />
            <Typography variant="caption" sx={{ color: "#ECE5D1" }}>
              Login
            </Typography>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default CartWidget;
