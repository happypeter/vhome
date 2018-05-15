const paths = {
  '/': '首页',
  '/ga': '相册',
  '/resume': '简历',
  '/blog': '博客',
  '/note': '笔记'
}

export const getPathName = rootPath => paths[rootPath]
