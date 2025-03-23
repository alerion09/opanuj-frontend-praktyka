import { Product } from '../types/Product';
import { BsPlus } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.tsx';

interface AddProductButtonProps {
  product: Product;
}

export const AddProductButton = (props: AddProductButtonProps) => {
  const { product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(product)} data-testid="add-to-cart-button">
      <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
        <BsPlus className="text-3xl" />
      </div>
    </button>
  );
};
