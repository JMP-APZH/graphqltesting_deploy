import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const RadKategorieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.radKategorie?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="kategoriename"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Kategoriename
        </Label>

        <TextField
          name="kategoriename"
          defaultValue={props.radKategorie?.kategoriename}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="kategoriename" className="rw-field-error" />

        <Label
          name="sichtbar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sichtbar
        </Label>

        <CheckboxField
          name="sichtbar"
          defaultChecked={props.radKategorie?.sichtbar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="sichtbar" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RadKategorieForm
