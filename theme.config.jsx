import { useRouter } from 'next/router'

export default {
  useNextSeoProps() {
    const { pathname } = useRouter()
    if (pathname !== '/') {
      return {
        titleTemplate: '%s – 7ms'
      };
    } else {
      return {
        titleTemplate: '7ms'
      };
    }
  },
  footer: {
    text: (
      <>
        <span>
          Copyright © 2020 <a href="https://7ms.net" target="_blank">
            7ms.net
          </a>.
          <br />
          Documentation website powered by <a href="https://nextra.site" target="_blank">
            Nextra
          </a>.
        </span>
      </>
    )
  },
  // logo: <img className="logo" src="./logo.svg" alt="7ms" />,
  logo: <span> 7ms.net </span>,
  // ... other theme options
  docsRepositoryBase: 'https://github.com/7ms-net/open-doc',
  search: {
    placeholder: '搜索...'
  },
  toc: {
    title: '大纲'
  },
  editLink: {
    text: '编辑该页',
    component: function (props) {
      return (
        <a
          className={props.className}
          href={`https://github.com/7ms-net/open-doc/blob/main/${props.filePath}`}
        >
          {props.children}
        </a>
      );
    }
  },
  feedback: {
    useLink: () => 'https://github.com/7ms-net/open-doc/issues/new?labels=feedback',
    content: '有疑问？发送反馈 →'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '浅色',
        dark: '深色',
        system: '跟随系统'
      }
    }
  }
}
