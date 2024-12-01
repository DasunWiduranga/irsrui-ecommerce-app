import React from "react";
import  products  from "../data/products";
import ProductCard from "../components/ProductCard";
import { Grid, Container } from "@mui/material";

const HomePage = () => (
  <Container>
    <Grid container spacing={3} style={{ marginTop: "20px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HomePage;
