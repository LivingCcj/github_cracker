class MockData {
  getRepositoryList() {
    return [
      { name: 'Nick Sweeting', count: 194, isFork: false, url: 'https://github.com/search?o=desc&p=5&q=python&s=followers&type=Users' },
      { name: 'Ben Nuttall', count: 193, isFork: true, url: 'https://github.com/search?o=desc&p=6&q=python&s=followers&type=Users' },
      { name: 'Ian Ozsvald', count: 192, isFork: false, url: 'https://github.com/search?o=desc&p=9&q=python&s=followers&type=Users' },
      { name: 'Matt Makai', count: 191, isFork: false, url: 'https://github.com/search?o=desc&p=3&q=python&s=followers&type=Users' },
      { name: 'Golden Looly', count: 190, isFork: false, url: 'https://github.com/search?o=desc&p=5&q=python&s=followers&type=Users' },
      { name: 'liuzhijun', count: 189, isFork: false, url: 'https://github.com/search?o=desc&p=4&q=python&s=followers&type=Users' },
      { name: 'David Lord', count: 188, isFork: false, url: 'https://github.com/search?o=desc&p=4&q=python&s=followers&type=Users' },
      { name: 'Andrews Medina', count: 187, isFork: false, url: 'https://github.com/search?o=desc&p=4&q=python&s=followers&type=Users' },
      { name: 'KD Chang', count: 186, isFork: false, url: 'https://github.com/search?o=desc&p=6&q=python&s=followers&type=Users' },
      { name: 'Juan Luis Cano Rodríguez', count: 185, isFork: false, url: 'https://github.com/search?o=desc&p=9&q=python&s=followers&type=Users' }
    ]
  }
}

export default new MockData()
