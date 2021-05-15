#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs'

import fetch from 'node-fetch'
import { getIntrospectionQuery } from 'graphql'
import { getIntrospectedSchema, minifyIntrospectionQuery } from '@urql/introspection'

import { developmentPort } from '../src/configuration'

const url = `http://localhost:${developmentPort}`

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    variables: {},
    query: getIntrospectionQuery({
      descriptions: false,
    }),
  }),
})
.then(result => result.json())
.then(({ data }) => {
  const minified = minifyIntrospectionQuery(getIntrospectedSchema(data))

  fs.writeFileSync('../../front/src/graphql-schema.json', JSON.stringify(minified, null, 2))
})
