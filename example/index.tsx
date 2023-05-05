import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProducTitle, ProductButtons, ProductCard, ProductImage } from '../.';
import { ProductProps } from '../dist/interfaces/interfaces';
import { product1 } from '../src/mocks/data';

const App = () => {
  return (
    <ProductCard
      product={product1}
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
