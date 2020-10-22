import React from 'react';
import { Section, Title, Row, Cell, Link, Table, TBody } from './Style';

const ImportantDates = ({ data }) => {
  return (
    <Section>
      <Title>Important Links</Title>
      <Table>
        <TBody>
          {Object.keys(data).map((key) => {
            return (
              <Row key={key}>
                <Cell style={{ textTransform: 'capitalize' }}>
                  {key.replace(/_/g, ' ')}
                </Cell>
                <Cell>
                  <Link href={data[key]} target="_blank">
                    Click Here
                  </Link>
                </Cell>
              </Row>
            );
          })}
        </TBody>
      </Table>
    </Section>
  );
};

export default ImportantDates;
