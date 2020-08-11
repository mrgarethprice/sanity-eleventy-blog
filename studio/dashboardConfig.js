export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f324c2dc696711e0f6b17a0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-j8nc3onx',
                  apiId: '2ee35ab6-e509-43a6-9c34-3827db7c3857'
                },
                {
                  buildHookId: '5f324c2dbf60ec2e4447470c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-3s9o5z2h',
                  apiId: '3a2b55fa-9e8a-4161-b656-c7210bc31925'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrgarethprice/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-3s9o5z2h.netlify.app', category: 'apps'}
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
