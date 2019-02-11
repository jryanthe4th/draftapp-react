import React from 'react';

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

export default class Draftboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username } = this.props;
    return (
      <div className='dashboard-container'>
        <div>
          <h1>This is {username}&apos;s dashboard</h1>
          <p>This is a paragraph from the dashboard.</p>
        </div>
        <div className='table-container'>
          <h1>This is the table-container</h1>
          <div className='row'>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Column One
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Column Two
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Column Three
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Column Four
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Column Five
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Column Six
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Column Seven
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Column Eight
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Column Nine
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Column Ten
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Column Eleven
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Column Twelve
              </div>
            </div>
          </div>
          <div className='row-reverse'>
            <div className='column'>
              <div className='green-column'>
                Some Text in Row 2, Column One
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Row 2, Column Two
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Row2, Column Three
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Row 2, Column Four
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Row 2, Column Five
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Row2, Column Six
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Row 2, Column Seven
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Row 2, Column Eight
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Row2, Column Nine
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                Some Text in Row 2, Column Ten
              </div>
            </div>
            <div className='column'>
              <div className='orange-column'>
                Some Text in Row 2, Column Eleven
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                Some Text in Row2, Column Twelve
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='double-column'>
              <div className='blue-column'>
                Some Text in row 3 double column 1
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                something in row 3 column 2
              </div>
            </div>
          </div>
        </div>

        <h2>Responsive collapse (by row)</h2>
        <div className='Rtable Rtable--4cols Rtable--collapse'>
          <div className='Rtable-cell Rtable-cell--head'><h3>Round 1</h3></div>
          <div className='Rtable-cell'>Pick 1</div>
          <div className='Rtable-cell'>Pick 2</div>
          <div className='Rtable-cell Rtable-cell--foot'><strong>Pick 3</strong></div>

          <div className='Rtable-cell Rtable-cell--head'><h3>Round 2</h3></div>
          <div className='Rtable-cell'>Pick 1</div>
          <div className='Rtable-cell'>Pick 2</div>
          <div className='Rtable-cell Rtable-cell--foot'><strong>Pick 3</strong></div>
        </div>

        {/* <h2>Responsive collapse (by column)</h2>
        <div className='Rtable Rtable--2cols Rtable--collapse'>

          <div style='order:0;' className='Rtable-cell Rtable-cell--head'><h3>Eddard Stark</h3></div>
          <div style='order:1;' className='Rtable-cell'>Has a sword named Ice</div>
          <div style='order:2;' className='Rtable-cell'>No direwolf</div>
          <div style='order:3;' className='Rtable-cell Rtable-cell--foot'><strong>Lord of Winterfell</strong></div>

          <div style='order:0;' className='Rtable-cell Rtable-cell--head'><h3>Jon Snow</h3></div>
          <div style='order:1;' className='Rtable-cell'>Has a sword named Longclaw</div>
          <div style='order:2;' className='Rtable-cell'>Direwolf: Ghost</div>
          <div style='order:3;' className='Rtable-cell Rtable-cell--foot'><strong>Knows nothing</strong></div>

        </div>

        <h2>Responsive collapse (by row)</h2>
        <div className='Rtable Rtable--4cols Rtable--collapse'>

          <div className='Rtable-cell Rtable-cell--head'><h3>Eddard Stark</h3></div>
          <div className='Rtable-cell'>Has a sword named Ice</div>
          <div className='Rtable-cell'>No direwolf</div>
          <div className='Rtable-cell Rtable-cell--foot'><strong>Lord of Winterfell</strong></div>

          <div className='Rtable-cell Rtable-cell--head'><h3>Jon Snow</h3></div>
          <div className='Rtable-cell'>Has a sword named Longclaw</div>
          <div className='Rtable-cell'>Direwolf: Ghost</div>
          <div className='Rtable-cell Rtable-cell--foot'><strong>Knows nothing</strong></div>

        </div> */}

      </div>
    );
  }
}
