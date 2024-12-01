import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
          style={{ marginTop: "10px" }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
