import React from 'react';
import { Grid, List, Container, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer-background">
        <Container>

          <Grid columns={4}>
            <Grid.Column>
              <List>
                <List.Item>About Us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
                <List.Item>Employment</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Shipping & Returns</List.Item>
                <List.Item>Terms & Conditions</List.Item>
                <List.Item>Privacy Policy</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Sale</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Sale</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>Join our mailing list for updates</List.Item>
                <List.Item>Sign up to receive our email updates!</List.Item>
                <Input placeholder='Enter email address'/>
                <Label color='black'>Join</Label>
              </List>
            </Grid.Column>

          </Grid>

        </Container>
      </div>
    );
  }
}
