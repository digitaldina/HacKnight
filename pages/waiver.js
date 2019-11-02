import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'https://drive.google.com/open?id=1J88tW0jf-VkDY4Su69qi0225u7EjE8wmkHZN9FYlrYM'
      })
      res.end()
    } else {
      Router.push('https://drive.google.com/open?id=1J88tW0jf-VkDY4Su69qi0225u7EjE8wmkHZN9FYlrYM')
    }
    return {}
  }
}
