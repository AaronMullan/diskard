/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getData } from '../utils/dataUtils';

export default function Contacts() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    getData(setMyData);
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{
        display: 'flex',
        padding: '2rem',
        font: 'system',
        justifyContent: 'center',
      }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {myData.map(({
              id, first_name: firstName, last_name: lastName, message,
            }) => (
              <tr key={id}>
                {/* <td>
                  {id}
                </td> */}
                <td style={{ borderBottom: '1px solid #009AA8', marginRight: '10px' }}>
                  {firstName}
                  {' '}
                  {lastName}
                </td>
                <td style={{ borderBottom: '1px solid #009AA8' }}>
                  {message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  );
}
