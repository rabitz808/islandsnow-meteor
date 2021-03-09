import React from 'react';
import { Menu, Dropdown, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="middlemenu" widths={5}>

        <Grid columns={5}>
          <Grid.Column>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column>
            <Dropdown item text="SALE">
              <Dropdown.Menu>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid>

      </Menu>
    );
  }
}
