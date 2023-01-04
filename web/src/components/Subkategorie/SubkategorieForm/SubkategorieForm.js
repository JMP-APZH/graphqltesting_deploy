import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const SubkategorieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.subkategorie?.id)
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
          name="subkatbname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subkatbname
        </Label>

        <TextField
          name="subkatbname"
          defaultValue={props.subkategorie?.subkatbname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="subkatbname" className="rw-field-error" />

        <Label
          name="sichtbar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sichtbar
        </Label>

        <CheckboxField
          name="sichtbar"
          defaultChecked={props.subkategorie?.sichtbar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="sichtbar" className="rw-field-error" />

        <Label
          name="radKategorieId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rad kategorie id
        </Label>

        <NumberField
          name="radKategorieId"
          defaultValue={props.subkategorie?.radKategorieId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="radKategorieId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SubkategorieForm
