import React, { Component } from 'react';
import { Button, Form, Table } from 'semantic-ui-react';
import axios from 'axios';
import PulseLoader from "react-spinners/PulseLoader";


export default class FrekansHesap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      url: "",
      loading: false
    }
  }
  getData = (url) => {
    axios.post(`http://localhost:8000/frekans`, { url })
      .then(res => {
        const data = res.data;
        this.setState({ apiResponse: data, loading: false });
      })
  }
  handleChange = (e) => {
    this.setState({ url: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    this.getData(this.state.url);
  }
  render() {
    const datas = this.state.apiResponse;
    return (
      <div className="components">
        <p>Girilen bir URL'in sayfa içeriğinde, her kelimenin kaçar adet geçtiğini gösterir...</p>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>URL</label>
            <input id="url" name="url" value={this.state.url} placeholder='http://www.mysite.com'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button fluid color='teal' type='submit'>Veri Çek</Button>
        </Form>
        <br />
        <PulseLoader color={'#00b5ad'} loading={this.state.loading} />
        <div className="table-scrol">
          {datas.length > 0 && (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>{this.state.url}</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Sayfadaki Tüm Kelimeler - ({datas.length})</Table.HeaderCell>
                  <Table.HeaderCell>Adet</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {datas.map((item) => (
                  <Table.Row>
                    <Table.Cell>{item.key}</Table.Cell>
                    <Table.Cell>{item.val}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </div>
      </div>
    )
  }
}
