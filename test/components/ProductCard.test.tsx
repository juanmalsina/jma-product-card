import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../../src/mocks/data';

describe('ProducCard', () => {
  test('debe mostrar el componente correctamente con un children personalizado', () => {
    const wrapper = renderer.create(
      <ProductCard
        initialValues={{ maxCount: 10, count: 0 }}
        product={product2}
      >
        {() => <h1> Product Card </h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard
        initialValues={{ maxCount: 10, count: 0 }}
        product={product2}
      >
        {({ count, increaseBy }) => (
          <>
            <h1> Product Card </h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
