import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import Header from "../Header";
import Projegiris from "../Projegiris";
import FrekansHesap from "../FrekansHesap";
import AnahtarKelime from "../AnahtarKelime";
import BenzerlikScor from "../BenzerlikScor";
import SiteIndexleme from "../SiteIndexleme";
import Semantik from "../Semantik";


export default class HomePage extends Component {
  state = { activeItem: 'Web İndexleme Projesi' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Grid columns={2} padded>
        <Grid.Column width={4} textAlign='left'>
          <Menu fluid vertical inverted>
            <Menu.Item className='header'
              name='Web İndexleme Projesi'
              active={activeItem === 'Web İndexleme Projesi'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Sayfada geçen kelimelerin frekanslarını hesaplama'
              active={activeItem === 'Sayfada geçen kelimelerin frekanslarını hesaplama'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Sayfadaki anahtar kelimeler'
              active={activeItem === 'Sayfadaki anahtar kelimeler'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='İki sayfa arasındaki benzerlik scorlaması'
              active={activeItem === 'İki sayfa arasındaki benzerlik scorlaması'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Site indexleme ve sıralama'
              active={activeItem === 'Site indexleme ve sıralama'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Semantik analiz'
              active={activeItem === 'Semantik analiz'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Rapor'
              active={activeItem === 'Rapor'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header activeItem={this.state.activeItem} />
          {this.state.activeItem === 'Web İndexleme Projesi' && <Projegiris />}
          {this.state.activeItem === 'Sayfada geçen kelimelerin frekanslarını hesaplama' && <FrekansHesap />}
          {this.state.activeItem === 'Sayfadaki anahtar kelimeler' && <AnahtarKelime />}
          {this.state.activeItem === 'İki sayfa arasındaki benzerlik scorlaması' && <BenzerlikScor />}
          {this.state.activeItem === 'Site indexleme ve sıralama' && <SiteIndexleme />}
          {this.state.activeItem === 'Semantik analiz' && <Semantik />}
        </Grid.Column>
      </Grid>
    )
  }
}

