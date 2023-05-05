import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../../src/mocks/data';

describe('ProducImage', () => {
  test('debe mostrar el componente correctamente con una imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="hhtps://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        initialValues={{ maxCount: 10, count: 0 }}
        product={product2}
      >
        {() => <ProductImage />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
