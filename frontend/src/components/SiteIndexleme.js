import React, { Component } from 'react';
import { Button, Form, Table } from 'semantic-ui-react';
import axios from 'axios';
import InlineError from "./InlineError";
import PulseLoader from "react-spinners/RingLoader";

export default class SiteIndexleme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      apiResponsGroup: [],
      url: "",
      inlineError: false,
      urlgroup: [],
      sameKeys: [],
      open: false,
      totalScores: [],
      totalSameScores: [],
      topTenScore: [],
      loading: false
    }

  }

  getData = (url0) => {
    axios.post(`http://localhost:8000/sirala`, { url0 })
      .then(res => {
        const data = res.data;
        this.setState({ apiResponse: data })
      })
  }

  getDataGroup = async (url) => {
    for (let i = 0; i < url.length; i++) {
      let urlgroup = url[i];
      await axios.post(`http://localhost:8000/sirala`, { urlgroup })
        .then(res => {
          const data = res.data;
          this.setState({ apiResponsGroup: [...this.state.apiResponsGroup, data] });
        })
    }
    this.setState({ loading: false, open: true })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange2 = (e) => {
    let arr = e.target.value.split(',')
    this.setState({ urlgroup: arr })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true })
    const { url } = this.state;
    const { urlgroup } = this.state;
    this.setState({ apiResponsGroup: [], apiResponse: [], totalScores: [], totalSameScores: [], topTenScore: [], sameKeys: [] });
    if (url && urlgroup) {
      this.setState({ inlineError: false });
      this.getData(url);
      this.getDataGroup(urlgroup);
    } else {
      this.setState({ inlineError: true });
    }
  }

  sameKeysUrl = async (obj1, obj2) => {
    console.log("obj1 : ", obj1)
    console.log("obj2 : ", obj2)

    let obj = await obj1.filter(a =>
      obj2.find(x => x.key === a.key)
    );
    let totalSameScore = await obj.reduce((total, a) => {
      return total + a.score
    }, 0);
    this.setState({ totalSameScores: [...this.state.totalSameScores, totalSameScore] });
    let score = 0;
    for (let i = 0; i < obj.length; i++) {
      score += obj[i].score;
      if (i > 9) break;
    }
    this.setState({ topTenScore: [...this.state.topTenScore, score] });
    this.setState({ sameKeys: [...this.state.sameKeys, obj] });
  }

  scoreClick = async (index) => {
    console.log("scrolclick çalıştı")
    const { apiResponse } = this.state;
    const { apiResponsGroup } = this.state;
    if (apiResponse.length > 0 && apiResponsGroup.length > 0) {
      this.sameKeysUrl(apiResponsGroup[index], apiResponse)
      let totalScore = await apiResponsGroup[index].reduce((total, a) => {
        return total + a.score
      }, 0);
      this.setState({ totalScores: [...this.state.totalScores, totalScore] });
    }
  }


  render() {
    const { apiResponse } = this.state;
    const { apiResponsGroup } = this.state;
    console.log(this.state.url)
    console.log(apiResponse)
    console.log(this.state.urlgroup)
    console.log(apiResponsGroup)
    console.log("Same Keys :", this.state.sameKeys)
    console.log("total Same scores :", this.state.totalSameScores)
    console.log("total scores :", this.state.totalScores)
    console.log("topten score :", this.state.topTenScore)


    return (
      <div className="components">
        <p>Girilen bir URL ile URL grubu arasındaki benzerlik scorlamasını verir...</p>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>URL</label>
            <input
              id="url"
              name="url"
              value={this.state.url}
              placeholder='http://www.mysite.com'
              onChange={this.handleChange}
            />
          </Form.Field>
          {this.state.inlineError && <InlineError message={"Url Girmelisiniz..."} />}
          <Form.Field>
            <label>URL Grubu ( URL ' lerinizi aralarında virgül olacak şekilde giriniz. )</label>
            <input
              id="urlgroup"
              name="urlgroup"
              value={this.state.urlgroup}
              placeholder='http://www.site1.com,http://www.site2.com,http://www.site3.com,.....'
              onChange={this.handleChange2}
            />
          </Form.Field>
          {this.state.inlineError && <InlineError message={"Url Girmelisiniz..."} />}
          <Button fluid color='teal' type='submit'>Veri Çek</Button>
        </Form>
        <br />
        <PulseLoader color={'#00b5ad'} loading={this.state.loading} />
        {this.state.open && (
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>Base URL : {this.state.url}</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Karşılaştırılacak URL ler</Table.HeaderCell>
                  <Table.HeaderCell>Benzerlik Scoru</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.urlgroup.map((url, index) => (
                  <Table.Row>
                    <Table.Cell><Button color='teal' onClick={() => this.scoreClick(index)}>Benzerlik Bul</Button></Table.Cell>
                    <Table.Cell>{url}</Table.Cell>
                    <Table.Cell>{(this.state.totalSameScores[index] / this.state.totalScores[index])}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}
      </div>
    )
  }
}
