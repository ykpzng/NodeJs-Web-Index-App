import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

export default class Projegiris extends Component {
  render() {
    return (
      <div className="">

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'><h3>Proje Bilgileri</h3></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell><p><strong>Proje Adı</strong></p> </Table.Cell>
              <Table.Cell><p>Web İndeksleme Uygulaması</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><p><strong>Amaç</strong></p> </Table.Cell>
              <Table.Cell><p>Verilen bir URL’deki web sayfa içeriğine göre diğer birden fazla web sayfasını benzerlik bakımından indeksleyip sıralayan web tabanlı bir uygulama geliştirmek. Böylece bu proje sayesinde web indeksleme yöntemleri hakkında bilgi edinilmesini ve web tabanlı uygulama yazma becerisinin geliştirilmesi amaçlanmaktadır.</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><p><strong>Proje Sahibi</strong></p> </Table.Cell>
              <Table.Cell><p>Yakup ZENGİN - 200201148</p><p>Mehmet AYDIN - 190201148</p></Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'><h3>Projede Kullanılan Yazılımlar</h3></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell><p><strong>FrontEnd</strong></p> </Table.Cell>
              <Table.Cell><ul>
                <li>Html</li>
                <li>Semantic Ui React</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
              </ul>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><p><strong>BackEnd</strong></p> </Table.Cell>
              <Table.Cell><ul>
                <li>NodeJs</li>
                <li>JavaScript</li>
                <li>ExpressJs</li>
                <li>Puppeteer --<i>Webden veri kazıma</i> </li>
              </ul>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}
