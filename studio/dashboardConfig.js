export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622fecf4ace91200cc746254',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-oq1so1c6',
                  apiId: '0a553b33-eabd-4c51-bc0a-004fe440457b'
                },
                {
                  buildHookId: '622fecf4c5cd1b00961ef2d2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zhmtu5kz',
                  apiId: '019f5b9e-baa3-4218-9277-df45891c78a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NabealRashidi/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zhmtu5kz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
