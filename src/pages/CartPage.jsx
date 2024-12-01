import React from "react";
import { useCart } from "../contexts/CartContext";
import { calculateTotal } from "../utils/calculateTotal";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography align="center">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography>Price: ${item.price}</Typography>
                    <Typography>Quantity:</Typography>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      inputProps={{ min: 1 }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginTop: "10px" }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h5" align="right" gutterTop style={{ marginTop: "20px" }}>
            Total: ${calculateTotal(cart).toFixed(2)}
          </Typography>
        </>
      )}
    </Container>
  );
};

export default CartPage;
