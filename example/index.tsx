import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProducTitle, ProductButtons, ProductCard, ProductImage } from '../.';
import { ProductProps } from '../dist/interfaces/interfaces';

export const product: ProductProps = {
  id: "1",
  title: "coffee mug - card",
  img: "images/coffee-mug.png",
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 0,
        maxCount: 10,
      }}
    >
      {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
          <ProductImage />
          <ProducTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
