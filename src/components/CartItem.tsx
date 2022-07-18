import { Button, Stack } from 'react-bootstrap';
import {
  CartItem as CartItemProps,
  useShoppingCart,
} from '../context/ShoppingCartContex';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((storeItem) => storeItem.id === id);

  if (item == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        <div>
          {item.name}
          {quantity > 1 && (
            <span
              className='text-muted'
              style={{ fontSize: '0.65rem', paddingLeft: 5 }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '0.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button onClick={() => removeFromCart(item.id)} variant='outline-danger'>
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
