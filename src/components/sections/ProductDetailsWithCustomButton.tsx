import { ProductDetailsSection, getOverriddenSection } from '@faststore/core';

const ProductDetailsWithCustomButton = getOverriddenSection({
Section: ProductDetailsSection,
components: {
    BuyButton: { props: { size: "regular", iconPosition: "right" } } 
},
})

export default ProductDetailsWithCustomButton;