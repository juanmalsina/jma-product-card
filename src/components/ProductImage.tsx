import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  const imageToShow = img || product.img;
  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imageToShow ? imageToShow : noImage}
      alt="coffe mug"
    />
  );
};