import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

type Props = {
  setFormOpen: (value: boolean) => void;
}

export default function EventForm({setFormOpen}: Props) {
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form>
        <FormField>
          <input type='text' placeholder='Event title' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Category' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Description' />
        </FormField>
        <FormField>
          <input type='text' placeholder='City' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Venue' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Date' />
        </FormField>
        
        <Button type='submit'  floated='right' positive content='Submit' />
        <Button onClick={() => setFormOpen(false)} type='button' floated='right' positive content='Cancel' />
      </Form>
    </Segment>
  )
}