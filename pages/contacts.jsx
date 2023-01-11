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
              <th>id</th>
              <th>First Name</th>
            </tr>
          </thead>
          <tbody>
            {myData.map(({
              id, first_name: firstName, last_name: lastName, message,
            }) => (
              <tr key={id}>
                <td>
                  {id}
                </td>
                <td>
                  {firstName}
                </td>
                <td>
                  {lastName}
                </td>
                <td>
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
