import React from 'react';
import Head from 'next/head';
import '../stylesheets/normalize.scss';
import '../stylesheets/skeleton.scss';

export default function MainLayout({ pageTitle = "React Spring: Animation Testbed", children }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className="container">
        {children}
      </main>
    </>
  )
}
