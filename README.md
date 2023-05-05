# 00-Product-Card

Este es un paquete de pruebas de despliegue NPM

## Alsina Juan Maneul.

```
import {ProducTitle, ProductButtons, ProductImage, ProductCard} from './components';
```

```
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

```
