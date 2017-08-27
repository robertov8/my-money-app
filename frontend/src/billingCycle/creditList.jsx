import React, { Component } from 'react';
import { Field } from 'redux-form';

import Grid from '../common/layout/grid';

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td>
                    <Field name='credits[0].name' component='input' />
                    <Field name='credits[0].value' component='input' />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                    </table>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList;
