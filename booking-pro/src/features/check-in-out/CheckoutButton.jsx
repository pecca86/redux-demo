import Button from '../../ui/Button';

function CheckoutButton({ bookingId }) {

  return (
    <Button
      variation='primary'
      size='small'
      onClick={() => alert(`checking out ${bookingId}`)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
