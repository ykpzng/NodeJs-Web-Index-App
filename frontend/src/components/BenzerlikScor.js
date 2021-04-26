import React, { Component } from 'react';
import { Button, Form, Table, Grid, Message } from 'semantic-ui-react';
import axios from 'axios';
import InlineError from "./InlineError";
import PulseLoader from "react-spinners/PulseLoader";

export default class BenzerlikScor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse1: [],
      apiResponse2: [],
      url1: "",
      url2: "",
      sameKeys1: [],
      sameKeys2: [],
      inlineError: false,
      open: false,
      loading: false,
    }
  }

  getData1 = (url1) => {
    axios.post(`http://localhost:8000/score`, { url1 })
      .then(res => {
        const data = res.data;
        this.setState({ apiResponse1: data, loading: false });
      })
  }

  getData2 = (url2) => {
    axios.post(`http://localhost:8000/score`, { url2 })
      .then(res => {
        const data = res.data;
        this.setState({ apiResponse2: data, loading: false });
      })
  }

  sameKeysUrl1 = (obj1, obj2) => {
    const obj = obj1.filter(a =>
      obj2.find(x => x.key === a.key)
    );
    this.setState({ sameKeys1: obj });
  }

  sameKeysUrl2 = (obj1, obj2) => {
    const result = obj2.filter(a =>
      obj1.find(x => x.key === a.key)
    );
    this.setState({ sameKeys2: result });
  }

  scoreClick = () => {
    const { apiResponse1 } = this.state;
    const { apiResponse2 } = this.state;
    if (apiResponse1.length > 0 && apiResponse2.length > 0) {
      this.sameKeysUrl1(apiResponse1, apiResponse2);
      this.sameKeysUrl2(apiResponse1, apiResponse2);
    }
    this.setState({ open: true });
  }

  sameFind = (obj1, obj2) => {
    let newObj = [];
    let score2, i, j;
    for (i = 0; i < obj1.length; i++) {
      for (j = 0; j < obj2.length; j++) {
        if (obj1[i].key === obj2[j].key) {
          score2 = obj2[j].score
        }
      }
      newObj[i] = { key: obj1[i].key, score1: obj1[i].score, score2: score2 };
    }
    // newObj.length = 10;
    return newObj;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { url1 } = this.state;
    const { url2 } = this.state;

    if (url1 && url2) {
      this.setState({ inlineError: false })
      this.getData1(url1);
      this.getData2(url2);
    } else {
      this.setState({ inlineError: true })
    }

  }

  render() {
    const { apiResponse1 } = this.state;
    const { apiResponse2 } = this.state;
    const { sameKeys1 } = this.state;
    const { sameKeys2 } = this.state;
    const newObj = this.sameFind(sameKeys1, sameKeys2)

    let url2TotalScore = apiResponse2.reduce((total, a) => {
      return total + a.score
    }, 0)
    let totalSameScore = newObj.reduce((total, a) => {
      return total + a.score2
    }, 0)
    let sameScore = totalSameScore / url2TotalScore;

    return (
      <div className="components">
        <p>Girilen iki URL arasındaki bezzerlik scorunu verir...</p>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>URL - 1</label>
            <input
              id="url1"
              name="url1"
              value={this.state.url1}
              placeholder='http://www.mysite.com'
              onChange={this.handleChange}
            />
          </Form.Field>
          {this.state.inlineError && <InlineError message={"Url Girmelisiniz..."} />}
          <Form.Field>
            <label>URL - 2</label>
            <input
              id="url2"
              name="url2"
              value={this.state.url2}
              placeholder='http://www.mysite.com'
              onChange={this.handleChange}
            />
          </Form.Field>
          {this.state.inlineError && <InlineError message={"Url Girmelisiniz..."} />}
          <Button fluid color='teal' type='submit'>Veri Çek</Button>
        </Form>
        <br />
        <PulseLoader color={'#00b5ad'} loading={this.state.loading} />
        {apiResponse1.length > 0 &&
          <Button fluid color='teal' onClick={this.scoreClick}>Benzerlik Bul</Button>}
        <br />
        <div>
          {newObj.length === 0 ? (<Message info><h1>Benzerlik Scoru : {0}</h1></Message>) : (<Message info><h1>Benzerlik Scoru : {sameScore}</h1></Message>)}
          <Grid columns={3} padded='horizontally'>
            <Grid.Column>
              {apiResponse1.length > 0 && (
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' textAlign='center'>URL-1 Anahtar Kelimeleri</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Anahtar Kelime</Table.HeaderCell>
                      <Table.HeaderCell>Adet</Table.HeaderCell>
                      <Table.HeaderCell>Score</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {apiResponse1.map((item) => (
                      <Table.Row>
                        <Table.Cell>{item.key}</Table.Cell>
                        <Table.Cell>{item.val}</Table.Cell>
                        <Table.Cell>{item.score}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>)
              }
            </Grid.Column>
            <Grid.Column>
              {apiResponse2.length > 0 && (
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' textAlign='center'>URL-2 Anahtar Kelimeleri</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Anahtar Kelime</Table.HeaderCell>
                      <Table.HeaderCell>Adet</Table.HeaderCell>
                      <Table.HeaderCell>Score</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {apiResponse2.map((item) => (
                      <Table.Row>
                        <Table.Cell>{item.key}</Table.Cell>
                        <Table.Cell>{item.val}</Table.Cell>
                        <Table.Cell>{item.score}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>)
              }
            </Grid.Column>
            <Grid.Column>
              {newObj.length > 0 && (
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' textAlign='center'>URL-1 ve URL-2 Karşılaştırması</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Benzer Kelime</Table.HeaderCell>
                      <Table.HeaderCell>URL-1 Score</Table.HeaderCell>
                      <Table.HeaderCell>URL-2 Score</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {newObj.map((item) => (
                      <Table.Row>
                        <Table.Cell>{item.key}</Table.Cell>
                        <Table.Cell>{item.score1}</Table.Cell>
                        <Table.Cell>{item.score2}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>)
              }
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}
