import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { Field, reduxForm , propTypes, formValueSelector } from 'redux-form';
import connect from 'redux-connect-decorator'
@reduxForm({form: 'example_form', destroyOnUnmount: false})
@connect(store => ({ 
  global: store.global,
  form: store.form
}))
export default class DataForm extends React.Component {
    componentDidMount(){
        this.props.dispatch({type: "CONSTANT_STRING_TEST"})
    }
    render(){
        return (
            <div>
                Example Redux Form + Field + Connector
                <Field name="firstName" component="input" type="text" />
            </div>
        )
    }
}


