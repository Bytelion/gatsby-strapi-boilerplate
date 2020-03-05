import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components'

const EventTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiEvent.title}</h1>
    <p>{data.strapiEvent.caption}</p>
  </Layout>
)

export default EventTemplate

export const query = graphql`
  query EventTemplate($id: String!) {
    strapiEvent(id: {eq: $id}) {
      title
      caption
    }
  }
`