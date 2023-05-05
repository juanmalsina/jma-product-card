import React from 'react';
import renderer from 'react-test-renderer';
import { ProducTitle, ProductCard } from '../../src/components';
import { product1 } from '../../src/mocks/data';

describe('ProducTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProducTitle title="testTitle" className="test-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        initialValues={{ maxCount: 10, count: 0 }}
        product={product1}
      >
        {() => <ProducTitle />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
