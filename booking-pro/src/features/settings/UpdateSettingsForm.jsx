import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './hooks/useSettings';
import { useUpdateSettings } from './hooks/useUpdateSettings';

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const { isUpdating, updateSettings } = useUpdateSettings();

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input t
          ype='number'
          id='min-nights'
          defaultValue={settings?.min_booking_len}
          onBlur={(e) => { updateSettings({ min_booking_len: e.target.value }) }}
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          defaultValue={settings?.max_booking_len}
          onBlur={(e) => { updateSettings({ max_booking_len: e.target.value }) }}
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          defaultValue={settings?.max_guests_per_cabin}
          onBlur={(e) => { updateSettings({ max_guests_per_cabin: e.target.value }) }}
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          defaultValue={settings?.breakfast_price}
          onBlur={(e) => { updateSettings({ breakfast_price: e.target.value }) }}
        />
      </FormRow>

    </Form>
  );
}

export default UpdateSettingsForm;
